
/**
 * @roxi/routify 2.18.2
 * File generated Tue Jul 20 2021 11:46:58 GMT+0800 (Singapore Standard Time)
 */

export const __version = "2.18.2"
export const __timestamp = "2021-07-20T03:46:58.914Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

