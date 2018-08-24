import React, {Component} from 'react';
import Modal from '../components/UI/Modal';
import Auxi from './Auxi';

const handleError = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    
    confirmError = () => {
      this.setState({error: null});
    };
    
    componentWillMount () {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        err => {this.setState({error: err});});
    }
    
    componentWillUnmount () {
      // console.log('Will unmount', this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    
    
    render () {
      return (
        <Auxi>
          <Modal
            show={this.state.error}
            closeModal={this.confirmError}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxi>
      );
    };
  };
};

export default handleError;