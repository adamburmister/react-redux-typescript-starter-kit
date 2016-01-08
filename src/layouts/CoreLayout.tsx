require('!style!css!sass!../styles/core.scss')

export interface ICoreLayoutProps {
  children?: Array<any>;
}

export class CoreLayout extends React.Component<ICoreLayoutProps, {}> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='page-container'>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CoreLayout
