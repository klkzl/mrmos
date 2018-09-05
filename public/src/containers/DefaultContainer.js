import { connect } from 'react-redux';

import DefaultComponent from '../components/DefaultComponents';
import { addPosition } from '../actions/defaultActions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  addPosition
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultComponent);