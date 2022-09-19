import { connect } from "react-redux";
import { availableOptionsSelector } from "./options.selectors";
import Options from "./Options";
import toogleOption from "./options.actions";

const mapState = state => {
  return { options: availableOptionsSelector(state) };
};

const mapDispatch = {
  moveOption: toogleOption,
};

export default connect(mapState, mapDispatch)(Options);
