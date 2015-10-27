# mattschick.com
My personal site.

## Requirements
* node/npm
* [livereload extension in browser](http://livereload.com/extensions/) (optional)

## Development
All of the static assets are bundled to save space, so I've provided a watcher to automatically rebundle as changes happen in the source.

* install node dependencies `npm install`
* run the gulp watcher `gulp`
* then open up "dist/index.html" and turn on livereload

## Deployment
To bundle the assets just run `gulp bundle`.  Then copy the contents of the "dist" directory to where you'd like.

