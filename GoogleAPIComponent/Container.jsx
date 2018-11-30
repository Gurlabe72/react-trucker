export class Container extends React.Component {
    render ()  {
        if (!this.props.loaded) {
            return 
            <div>
                Hold the fuck up...
            </div>
            }
            return (
                <div>Map Area</div>
            )
        }
    }
export default GoogleApiComponent()({
apiKey:_google_API_key_here
}) (Container)
