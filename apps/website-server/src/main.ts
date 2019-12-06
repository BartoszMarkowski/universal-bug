import * as express from 'express';
import {environment} from './environments/environment';
import {ɵCommonEngine as CommonEngine} from "@nguniversal/common/engine";
import * as fs from "fs";
import {join} from "path";

const app = express();

const PORT = environment.port || 80;

const serverModule = join(process.cwd(), `dist/apps/template/example-server/main.js`);
// @ts-ignore
const {AppServerModule} = __non_webpack_require__(/* webpackIgnore: true */ serverModule);

// All regular routes use the Universal engine
app.get('*', async (req, res) => {
  const engine = new CommonEngine(AppServerModule);

  const result = await engine.render({
    document: fs.readFileSync(join(process.cwd(), 'dist/apps/template/example/index.html')).toString(),
    bootstrap: AppServerModule,
    url: '/',
    providers: []
  });
});


// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
