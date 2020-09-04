import webpack, { Stats } from 'webpack'
import configuration from './webpack.config'

const compiler = webpack(configuration)

compiler.run((err, stats) => {
  if (err) {
    console.log(err)
    return
  }

  const options: Stats.ToStringOptions = {
    colors: true,
  }

  console.log(stats.toString(options))
})
