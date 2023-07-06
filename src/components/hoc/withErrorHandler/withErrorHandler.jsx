import React, { Component } from "react";
import Modal from "../../Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.reqInterceptor = axios.interceptors.request.use((req) => req);
      this.resInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => {
          console.log(error);
          this.setState({ error });
          return Promise.reject(error); // must return the error otherwise this won't work
        }
      );
    }

    componentWillUnmount() {
      // this is for performance of the
      // program when using different routes
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    state = {
      error: null,
    };

    closeModalHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal
            ModalStatus={this.state.error}
            closeModal={this.closeModalHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
