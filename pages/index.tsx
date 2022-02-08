import type {NextPage} from 'next'

const Home: NextPage = () => {
    return (
        <div>
            <div style={{"position": "relative"}} className="margin">
                <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={undefined}
                        frameBorder="0"
                        height="100%"
                        sandbox="allow-scripts"
                        src="https://vxviewer.vercel.app/4681"
                        width="100%"
                        style={{minHeight: '500px'}}/>
            </div>
            <div style={{"position": "relative"}} className="margin">
                <iframe allow="allow-same-origin; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={undefined}
                        frameBorder="0"
                        height="100%"
                        sandbox="allow-scripts"
                        // src="https://ogsale-ui-og608e2pa-snark.vercel.app/app/crystal/32/ar/4"
                        src="https://og-embed-nlxhq9wwp-snark.vercel.app/app/crystal/32/embed"
                        width="100%"
                        style={{minHeight: '500px'}}/>

            </div>

        </div>
    )
}

export default Home
