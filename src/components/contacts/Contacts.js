import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    // get initial contacts from Redux
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// get initial application state (chosen parts) to component's props
// so this component can access App's State by using --> this.props.contacts

// *** Explain: state.contact.contacts ***
// state = application state (../reducers/index.js)
// contact = application state choose from combineReducers (../reducers/index.js)
// contacts = come from initialState/state in contactReducer.js (../reducers/contactReducer.js)
const mapStateToProps = state => ({ contacts: state.contact.contacts });

// get chosen actions to this component's props
// (NOW USING contactActions.js instead of mapDispatchToProps)
// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// });

// connect React and Redux
export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { getContacts }
)(Contacts);
