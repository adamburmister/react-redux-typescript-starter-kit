import { connect } from 'react-redux'
import { Link } from 'react-router'
import counterActions from '../redux/modules/counter'

// Load styles using require to make this valid TypeScript
// https://github.com/TypeStrong/ts-loader#loading-other-resources-and-code-splitting
let styles = require('!style!css!./HomeView.scss');

export interface IHomeViewProps extends React.Props<HomeView> {
  counter?: Number;
  doubleAsync?: React.MouseEventHandler;
  increment?: Function;
}

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state: any) => ({
  counter: state.counter
})

// @connect((state: any) => ({ counter: state.counter }), counterActions)
export class HomeView extends React.Component<IHomeViewProps, {}> {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux TypeScript Starter Kit</h1>
        <h2>
          Sample Counter:&nbsp;
          <span className={styles['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default'
                onClick={() => this.props.increment(1)}>
          Increment
        </button>
        <button className='btn btn-default'
                onClick={this.props.doubleAsync}>
          Double it (Async)
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
