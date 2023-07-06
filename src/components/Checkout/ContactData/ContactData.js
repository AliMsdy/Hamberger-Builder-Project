import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styles from "./ContactData.module.css";
import axios from "../../hoc/AxiosInstance/axiosInstance";
import Spinner from "../../UI/loadingSpinner/loadingSpinner";

class ContactData extends Component {
  state = {
    isLoading: false,
    orderForm: {
      // this state is for handling form contact data
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        active: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        active: false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code",
        },
        value: "",
        validation: {
          required: true,
          maxLength: 5,
          minLength: 5,
        },
        valid: false,
        active: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
          maxLength: 10,
          minLength: 5,
        },
        valid: false,
        active: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        active: false,
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "fastest",
        valid: true,
      },
    },
    isFormValid: false,
  };

  submitOrder = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true,
    });
    const formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    let orderData = {
      orderIngredients: { ...this.props.ingredients },
      customerInfo: formData,
      totalPrice: this.props.totalPrice,
      time: new Date().toLocaleString(),
    };
    axios
      .post("/orders.json", orderData)
      .then((response) => {
        console.log(response);
        this.setState({ isLoading: false });
        this.props.history.push("/");
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  formValidation = (value, rules) => {
    let isValid = true;

    if (rules?.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules?.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules?.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    // console.log(isValid);
    return isValid;
  };

  inputChangeHandler = (event, id) => {
    const copiedOrderForm = { ...this.state.orderForm }; // !shallow copy of orderForm with (...)
    const updatedFormElement = { ...copiedOrderForm[id] }; // !making a deep copy through going inside of this obj(orderForm)

    updatedFormElement.value = event.target.value;
    copiedOrderForm[id] = updatedFormElement;
    const isValid = this.formValidation(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedFormElement.valid = isValid;
    updatedFormElement.active = true;

    let isFormValid = true;
    for (let key in copiedOrderForm) {
      isFormValid = copiedOrderForm[key].valid && isFormValid;
    }
    this.setState({ orderForm: copiedOrderForm, isFormValid });
  };

  render() {
    let formElementArray = [];

    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    // console.log(formElementArray);

    let form = (
      <form onSubmit={this.submitOrder}>
        {formElementArray.map(({ id, config }) => (
          <Input
            elementType={config.elementType}
            elementConfig={config.elementConfig}
            key={id}
            label={id}
            value={config.value}
            isValid={config.valid}
            isActive={config.active}
            changed={(event) => this.inputChangeHandler(event, id)}
          />
        ))}
        <Button btnType="success" disabled={!this.state.isFormValid}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.isLoading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
