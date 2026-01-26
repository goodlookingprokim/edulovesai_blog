---
title: "Plasmo_Framework_초보자_가이드"
date: 2025-10-11
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "plasmo-framework-초보자-가이드"
category: "tutorials"
excerpt: "PlasmoFramework초보자가이드"
tags:
  - tutorial
  - guide
reading_time: 83
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

<page>
  <title>Introduction to Plasmo – Plasmo</title>
  <url>https://docs.plasmo.com/</url>
  <content>[](https://www.twitter.com/plasmohq)[](https://www.twitch.tv/plasmohq)[](https://www.plasmo.com/s/d)

Welcome to Plasmo, the all-in-one platform that makes it easy for browser extension developers to create, test, and publish amazing extensions. With Plasmo, you can say goodbye to tedious boilerplate code and hello to a faster, more seamless development experience.

Product Offerings[](#product-offerings)
---------------------------------------

Our flagship product, the [Plasmo Framework](https://docs.plasmo.com/#plasmo-framework), is the ultimate Browser Extension SDK. It's designed to help you write extension code quickly and easily, without worrying about the intricacies of browser extensions.

Once you've built your extension, use [Itero TestBed](https://docs.plasmo.com/#itero-testbed) to test it in a real-world environment. This powerful staging environment lets you see how your extension will perform in the wild, and make any necessary changes before you launch. Ship directly to your beta testers without a review process holding you back.

Finally, when you're ready to go live, our [Plasmo BPP tool](https://docs.plasmo.com/#plasmo-browser-platform-publisher) makes it easy to automate the publishing process. With just a few clicks, you can publish your extension to the world and start gaining users.

### Plasmo Framework[](#plasmo-framework)

Imagine a world where building browser extensions is easy and fun. Gone are the days of tedious development processes and struggling with complex APIs and configurations.

With Plasmo, declarative development is a breeze - just write a file, export a component, and Plasmo does the rest, automatically bundling and mounting it for you. Plus, [our active community (opens in a new tab)](https://www.plasmo.com/s/d) of over 400 developers is always there to help out and share their expertise.

Plasmo offers first-class support for Typescript, React, Preact, Svelte, and Vue, making it easy to build complex, beautiful and scalable extensions. And with live-reload and React HMR built-in, you can see your changes instantly, without having to manually refresh your extension.

Plasmo also comes with powerful libraries for [storage](https://docs.plasmo.com/framework/storage) and [messaging](https://docs.plasmo.com/framework/messaging), as well as built-in support for [.env files](https://docs.plasmo.com/framework/env). Plus, with Plasmo's "learn once, write everywhere" approach, you can build an extension once and easily [target it to multiple browsers and manifest versions](https://docs.plasmo.com/framework/workflows/build#with-a-specific-target).

To get started: [Click Here](https://docs.plasmo.com/framework#getting-started)

To migrate: [Click Here](https://docs.plasmo.com/quickstarts/migrate-to-plasmo)

### Itero TestBed[](#itero-testbed)

Testing browser extensions can be a tedious and time-consuming process. Traditional methods often require waiting for approval from browser stores or having your beta testers manually install updates. Itero TestBed offers a solution to this problem by allowing you to instantly push updates to your beta testers.

Our SaaS platform also integrates with GitHub and includes automatic versioning. With Itero TestBed, you can streamline the testing process and focus on iterating quickly.

Features include:

*   Instant updates to your beta testers
*   GitHub integration for easy deployment
*   Automatic versioning

To get started: [Click Here](https://docs.plasmo.com/itero)

### Plasmo Browser Platform Publisher[](#plasmo-browser-platform-publisher)

Open-source GitHub action that makes it easy to publish your browser extension to the Chrome, Firefox Add-ons, and Microsoft Edge Add-ons stores. With Plasmo BPP, you can automate the publishing process and spend more time building your extension.

To get started: [Click Here](https://docs.plasmo.com/framework/workflows/submit)

[Getting Started](https://docs.plasmo.com/framework "Getting Started")</content>
</page>

<page>
  <title>Plasmo Framework – Plasmo</title>
  <url>https://docs.plasmo.com/framework</url>
  <content>[](https://github.com/PlasmoHQ/plasmo/blob/main/LICENSE)[](https://www.npmjs.com/package/plasmo)[](https://www.twitter.com/plasmohq)[](https://www.twitch.tv/plasmohq)[](https://www.plasmo.com/s/d)

The [Plasmo (opens in a new tab)](https://www.plasmo.com/) Framework is a battery-packed browser extension SDK made by hackers for hackers. Build your product and stop worrying about config files and the odd peculiarities of building browser extensions.

Highlighted Features[](#highlighted-features)
---------------------------------------------

*   First-class [React (opens in a new tab)](https://reactjs.org/) + [Typescript (opens in a new tab)](https://www.typescriptlang.org/) Support
*   [Declarative Development (opens in a new tab)](https://docs.plasmo.com/framework#where-is-the-manifestjson-file)
*   [Content Scripts UI (opens in a new tab)](https://docs.plasmo.com/csui)
*   [Tab Pages (opens in a new tab)](https://docs.plasmo.com/framework/tab-pages)
*   Live-reloading + React HMR
*   [`.env*` files (opens in a new tab)](https://docs.plasmo.com/framework/env)
*   [Storage API (opens in a new tab)](https://docs.plasmo.com/framework/storage)
*   [Messaging API (opens in a new tab)](https://docs.plasmo.com/framework/messaging)
*   [Remote code bundling (opens in a new tab)](https://docs.plasmo.com/framework/remote-code) (e.g., for Google Analytics)
*   Targeting [multiple browser and manifest pairs (opens in a new tab)](https://docs.plasmo.com/framework/workflows/build#with-specific-target)
*   [Automated deployment via BPP (opens in a new tab)](https://docs.plasmo.com/framework/workflows/submit)
*   Optional support for [Svelte (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-svelte) and [Vue (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-vue), and [a lot of other tools (opens in a new tab)](https://github.com/PlasmoHQ/examples)

And many, many more! 🚀

System Requirements[](#system-requirements)
-------------------------------------------

*   Node.js 16.14.x or later
*   macOS, Windows, or Linux
*   (Strongly Recommended) [pnpm (opens in a new tab)](https://pnpm.io/)

Getting Started[](#getting-started)
-----------------------------------

This command will set up the simplest Plasmo browser extension project for you. The structure is straightforward:

### Development Server[](#development-server)

For live-reloading and HMR, you can start the development server with:

The above command will watch for file changes and regenerate a bundle of your extension in `build/chrome-mv3-dev`, and automatically reload your extension in your browser.

### Production Build[](#production-build)

For a production build, run:

This will create a production version of the extension in `build/chrome-mv3-prod`

### Loading the Extension in Chrome[](#loading-the-extension-in-chrome)

We plan to automate this in the future, but for the time being, these are the steps you need to take to load your extension in Chrome.

Head over to `chrome://extensions` and enable Developer Mode.

Click on "Load Unpacked" and navigate to your extension's `build/chrome-mv3-dev` (or `build/chrome-mv3-prod`) directory.

To see your popup, click on the puzzle piece icon on the Chrome toolbar, and click on your extension.

Where is the manifest.json file?[](#where-is-the-manifestjson-file)
-------------------------------------------------------------------

Plasmo abstracts away the manifest file. The framework generates the manifest under the hood based on your source files and configurations you export from your code, similar to how [Next.js (opens in a new tab)](https://nextjs.org/) abstracts page routing and SSG with the file system and page components.

We will further abstract with auto-permissions and a needs-based permission scheme, removing the need to specify permissions manually! _(Coming soon)_

Next Steps[](#next-steps)
-------------------------

Go to the [Extension Pages section](https://docs.plasmo.com/framework/ext-pages) to learn more about the different UI elements in a Plasmo extension and get inspiration. A modular example accompanies each workflow, showcasing the framework's simplicity. View examples on [our GitHub repo (opens in a new tab)](https://github.com/PlasmoHQ/examples).

Check out the [Customization section](https://docs.plasmo.com/framework/customization) for documentation on making Plasmo adapt to your needs.

To see how to integrate Plasmo with other tools (such as TailwindCSS or Firebase), check out the list of examples in the [Quickstarts section](https://docs.plasmo.com/quickstarts).

Community[](#community)
-----------------------

Find the Plasmo community on [Discord (opens in a new tab)](https://www.plasmo.com/s/d). If you're stuck and want some help or looking to chat more about Plasmo and browser extensions, this is the place to be!

If you find a bug in the Plasmo Framework, please report it using our [Bug Report Form](https://docs.plasmo.com/bug).

Our [Code of Conduct (opens in a new tab)](https://github.com/PlasmoHQ/plasmo/blob/main/.github/CODE_OF_CONDUCT.md) applies to all Plasmo community channels.

Projects using Plasmo Framework[](#projects-using-plasmo-framework)
-------------------------------------------------------------------

*   [Cradle (opens in a new tab)](https://playcradle.com/)
*   [ArConnect (opens in a new tab)](https://www.plasmo.com/blog/posts/migrating-chrome-extension-to-plasmo)
*   [MICE (opens in a new tab)](https://github.com/PlasmoHQ/mice)
*   [Hundreds of Repos on GitHub (opens in a new tab)](https://github.com/PlasmoHQ/plasmo/network/dependents)
*   Many hundreds more on the Chrome Web Store

[Welcome](https://docs.plasmo.com/ "Welcome")[New Extension](https://docs.plasmo.com/framework/workflows/new "New Extension")</content>
</page>

<page>
  <title>Start the Development Server – Plasmo</title>
  <url>https://docs.plasmo.com/framework/workflows/dev</url>
  <content>Once you've set up your project, start developing your extension by navigating to your project directory and running:

Plasmo will create a dev bundle for your extension and a live-reloading development server, automatically updating your extension bundle on file changes and reloading your browser on source code changes. It also prefixes the extension name with `DEV |` and makes the icon grayscale to distinguish between development and production extension bundles.

Loading the extension[](#loading-the-extension)
-----------------------------------------------

We plan to automate this in the future, but for the time being, these are the steps you need to take to load your extension in Chrome.

Head over to `chrome://extensions` and enable Developer Mode.

Click on "Load Unpacked" and navigate to your extension's `build/chrome-mv3-dev` (or `build/chrome-mv3-prod`) directory.

To see your popup, click on the puzzle piece icon on the Chrome toolbar, and click on your extension.

**Pro tip:** Pin your extension to the Chrome toolbar for easy access by clicking the pin button.

With a specific target[](#with-a-specific-target)
-------------------------------------------------

When you're building with Plasmo, you're building a Plasmo extension, rather than a Chrome or Firefox extension. This means that you can build a single extension that works across all supported browsers, with minor tweaks. You can direct Plasmo to build an extension for a specific browser and manifest version by using the `--target` flag:

The final bundle will be available in the `build/firefox-mv2-dev` directory.

For a list of officially supported targets, [visit this link](https://docs.plasmo.com/framework/workflows/faq#what-are-the-officially-supported-browser-targets).

Without source maps[](#without-source-maps)
-------------------------------------------

By default, Plasmo generates source maps for your extension during development. If you need to disable this, you can use the `--no-source-maps` flag:

This is useful when you have dependencies that don't play well with source maps.

With a specific hostname and port[](#with-a-specific-hostname-and-port)
-----------------------------------------------------------------------

The development server will, by default, bind to `localhost` and port `1012`. You can change these with `--serve-host` and `--serve-port`:

Similarly, the hot module reload websocket will, by default, bind to `localhost` and port `1815`, with the build reporter binding to the HMR socket + 1 (1816 by default). You can change these with `--hmr-host` and `--hmr-port`:

[New Extension](https://docs.plasmo.com/framework/workflows/new "New Extension")[Production Build](https://docs.plasmo.com/framework/workflows/build "Production Build")</content>
</page>

<page>
  <title>Create a New Extension – Plasmo</title>
  <url>https://docs.plasmo.com/framework/workflows/new</url>
  <content>To run the interactive initialization wizard, use the following command:

To skip the naming prompt, supply a name as a positional argument:

With src directory[](#with-src-directory)
-----------------------------------------

By default, Plasmo expects all source code to be in the root directory. However, you can follow [this guide](https://docs.plasmo.com/framework/customization/src) to use the `src` directory as the home for your source code.

With specific entry files[](#with-specific-entry-files)
-------------------------------------------------------

The default project contains just a [popup](https://docs.plasmo.com/framework/ext-pages#adding-a-popup-page) entry file. However, you can customize this behavior by using the `entry` flag with a comma-separated list of entry files to include in your initial project.

To use this flag, pick the entry files you would like to see in your project, omit its file extension, and supply it to the `--entry` flag:

There are many entry files to choose from. Check out [this directory (opens in a new tab)](https://github.com/PlasmoHQ/plasmo/tree/main/packages/init/entries) to see all the different entry files available to you.

The command above will create a project with the [options page](https://docs.plasmo.com/framework/ext-pages#adding-the-options-ui), a [newtab page](https://docs.plasmo.com/framework/ext-pages#adding-a-new-tab-page), and an [inline content script UI](https://docs.plasmo.com/framework/content-scripts-ui).

With an example template[](#with-an-example-template)
-----------------------------------------------------

Even more powerful, Plasmo can create a new project based on one of [our examples (opens in a new tab)](https://github.com/PlasmoHQ/examples/). Pick an example, and use its name as a flag when running the `create plasmo` command:

The above will generate a project using the [with-env (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-env) example.

[Getting Started](https://docs.plasmo.com/framework "Getting Started")[Development Server](https://docs.plasmo.com/framework/workflows/dev "Development Server")</content>
</page>

<page>
  <title>Create a Production Build – Plasmo</title>
  <url>https://docs.plasmo.com/framework/workflows/build</url>
  <content>To create a production bundle for distribution, run:

Generating a zip bundle[](#generating-a-zip-bundle)
---------------------------------------------------

To create a production zip bundle ready to be uploaded to the web stores, use the `package` command:

If you would like to combine the building and packaging process, use the `--zip` flag with the `build` command instead:

With a specific target[](#with-a-specific-target)
-------------------------------------------------

The `build` command accepts a `--target` flag in the form of `<browser-name>-<manifest-version>`. Use it to specify a browser and manifest version combination to build for:

The final bundle will be available in the `build/firefox-mv2-prod` directory. You may use any pairs of target browser and manifest version.

For a list of officially supported targets, [visit this link](https://docs.plasmo.com/framework/workflows/faq#what-are-the-officially-supported-browser-targets). These targets are recognized by the bundler, which will automatically handle some vendor-specific behavior for you.

The `--target` flag also enables you to:

*   Use a target-specific environment file: `.env.<browser-name>`
*   Use a target-specific entry files: e.g `popup.<browser-name>.tsx`
*   Set the process.env.PLASMO\_BROWSER to `<browser-name>`

The third feature works with deadcode elimination. Thus the following code:

Will be trimmed down to `console.log("A")` if the target is `safari-mv3`.

With a custom tag[](#with-a-custom-tag)
---------------------------------------

Plasmo uses the `prod` tag for your production build. You can use the `--tag` flag to change this behavior:

The command above will:

*   Create the bundle in the `build/chrome-mv3-staging` directory
*   Set the `process.env.PLASMO_TAG` environment variables to `staging`
*   Parse and prioritize [`.env.staging` or `.env.staging.local`](https://docs.plasmo.com/framework/env#bundle-specific-env) if any exist

With source maps[](#with-source-maps)
-------------------------------------

By default, Plasmo does not generate source maps for your production bundle. However, you can use the `--source-maps` flag to change this behavior:

Bundle Buddy[](#bundle-buddy)
-----------------------------

If you'd like to analyze your bundle, you can use the `--bundle-buddy` flag, combined with `--source-maps` to generate a [Bundle Buddy (opens in a new tab)](https://bundle-buddy.com/) report:

Optimization[](#optimization)
-----------------------------

To create a bundle with minification disabled:

To create an import-optimized build where the bundle deduplicate and hoist your dependency to the top of the bundle:

Note that hoisting can potentially break your dependency, especially those that import dynamic dependency via a plugin system. However, hoisting can significantly improve the bundling speed and reduce the size of your bundle.

You may combine these flags as needed.

[Development Server](https://docs.plasmo.com/framework/workflows/dev "Development Server")[Submission](https://docs.plasmo.com/framework/workflows/submit "Submission")</content>
</page>

<page>
  <title>Workflows Frequently Asked Questions – Plasmo</title>
  <url>https://docs.plasmo.com/framework/workflows/faq</url>
  <content>How do I update Plasmo to the latest version?[](#how-do-i-update-plasmo-to-the-latest-version)
----------------------------------------------------------------------------------------------

If you use pnpm, run:

For other package managers, you will need to purge the lock file and rerun the install command to get the latest version of Plasmo.

Alternatively, you can manually pin Plasmo's version by upgrading its version number in `package.json` and running the install command afterward.

How do I use the experimental version of Plasmo?[](#how-do-i-use-the-experimental-version-of-plasmo)
----------------------------------------------------------------------------------------------------

Change the version of `plasmo` in `package.json` to `lab`:

Then do `pnpm i` to install the version.

What should I do if an error occurs?[](#what-should-i-do-if-an-error-occurs)
----------------------------------------------------------------------------

Please run `plasmo` with the `--verbose` flag and paste the output in the log section of a [bug report](https://docs.plasmo.com/bug). That will help us triage the issue 100x faster 🙏

What are the officially supported browser targets?[](#what-are-the-officially-supported-browser-targets)
--------------------------------------------------------------------------------------------------------

Officially supported targets are:

*   `chrome-mv3` (default)
*   `firefox-mv2`
*   `firefox-mv3` (experimental)

Any chromium-based browser (e.g. Edge, Brave, Opera, etc.) should work, e.g:

*   `edge-mv3`
*   `brave-mv3`
*   `opera-mv3`
*   `safari-mv3` requires some workaround. See [this issue (opens in a new tab)](https://github.com/PlasmoHQ/plasmo/issues/233).

For the time being, if you'd like to build for Safari, you can target `safari-mv3` and use the [safari-web-extension-converter (opens in a new tab)](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari) to convert the extension to Safari.

[Submission](https://docs.plasmo.com/framework/workflows/submit "Submission")[Extension Pages](https://docs.plasmo.com/framework/ext-pages "Extension Pages")</content>
</page>

<page>
  <title>Submit Your Extension – Plasmo</title>
  <url>https://docs.plasmo.com/framework/workflows/submit</url>
  <content>The Plasmo Framework ships with a convenient GitHub action called [Browser Platform Publish (opens in a new tab)](https://github.com/marketplace/actions/browser-platform-publisher/) or BPP. This action will automatically publish your extension to all supported browser extension stores. It runs on a manual trigger by default, but changing its config can make it run on every push.

To start publishing your Plasmo extension, set up a `keys.json` file with the following schema:

This schema is helpful if your editor supports [`JSON schema` (opens in a new tab)](https://json-schema.org/). Make sure to only declare valid submission credentials. Otherwise, the action will fail.

Check out our [token guide (opens in a new tab)](https://github.com/PlasmoHQ/bms/blob/main/tokens.md) to learn more about the tokens required to submit.

The final key might look like this:

Copy this key, and add it as a [repository secret on GitHub (opens in a new tab)](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) called `SUBMIT_KEYS`

Then, go on GitHub and trigger the action manually when you need to submit a new extension version!

[Production Build](https://docs.plasmo.com/framework/workflows/build "Production Build")[FAQ](https://docs.plasmo.com/framework/workflows/faq "FAQ")</content>
</page>

<page>
  <title>Browser Extension Pages – Plasmo</title>
  <url>https://docs.plasmo.com/framework/ext-pages</url>
  <content>Extension pages are built-in pages recognized by the browser. They include the extension's popup, options, sidepanel and newtab pages.

Adding a Popup Page[](#adding-a-popup-page)
-------------------------------------------

The popup page is a small dialog window that opens when a user clicks on the extension's icon in the browser toolbar. It is the most common type of extension page.

Create a `popup.tsx` file or a `popup/index.tsx` file that exports a default React component. With that, your popup is ready to be used 🚀!

See [with-popup (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-popup)

Adding the Options Page[](#adding-the-options-page)
---------------------------------------------------

The options page is meant to be a dedicated place for the extension's settings and configuration.

Create either an `options.tsx` or `options/index.tsx` file to render the options\_ui 👌

See [with-options (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-options-ui)

Adding a New Tab Page[](#adding-a-new-tab-page)
-----------------------------------------------

The New Tab page overrides the default tab and is generally how the browser greets the user.

Create a `newtab.tsx` file or a `newtab/index.tsx` file, and Plasmo will take care of the rest to render your new tab page 🤘!

See [with-newtab (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-newtab)

Adding a Side Panel[](#adding-a-side-panel)
-------------------------------------------

The Side Panel allows extensions to display their own UI in the side panel, enabling persistent experiences that complement the user's browsing journey.

Create a `sidepanel.tsx` file or a `sidepanel/index.tsx` file, and Plasmo will take care of the rest to render the UI in the Side Panel.

See [with-sidepanel (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-sidepanel)

Adding a Dev Tools Page[](#adding-a-dev-tools-page)
---------------------------------------------------

The Dev Tools page is a dedicated page that opens when a user opens the Dev Tools for the extension.

Create a `devtools.tsx` file or a `devtools/index.tsx` file, and Plasmo will take care of the rest!

See [with-devtools (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-devtools)

[FAQ](https://docs.plasmo.com/framework/workflows/faq "FAQ")[Tab Pages](https://docs.plasmo.com/framework/tab-pages "Tab Pages")</content>
</page>

<page>
  <title>Sandbox Pages – Plasmo</title>
  <url>https://docs.plasmo.com/framework/sandbox-pages</url>
  <content>Sandbox Pages are special extension pages with a different set of CSP restrictions. For example, it is possible to `eval` arbitrary code inside a sandbox page. Use the sandbox page to dynamically run code in a secure context with more privileges compared to an extension page.

A sandbox page can mount UI components similar to a [CSUI](https://docs.plasmo.com/framework/content-scripts-ui) or execute simple scripts. The following example showcases the ability to `eval` arbitrary code from a sandbox page and communicate the result back to the caller via message passing.

First, we want to add a sandbox page:

1.  Create a `sandbox.ts` file or a `sandboxes/<name>.ts` file in the source directory (project root or `src`)
2.  Export the following script:

The script above listens to a `message` event from the window scope, and evals the code sent by the caller via the data property. The sandbox page is now available under `sandbox.html` OR `sandboxes/<name>.html` in the extension bundle. To send messages to this page, we will need to mount it inside an iframe, and invoke the postMessage API. Let's do so in a `popup.tsx` [extension page](https://docs.plasmo.com/framework):

When a user clicks the `trigger iframe eval`, they will see the result of the eval done inside the sandbox page.

See [rfc-263 (opens in a new tab)](https://github.com/PlasmoHQ/plasmo-test/blob/main/rfc/rfc-263-sandbox-pages) for more details.

[Tab Pages](https://docs.plasmo.com/framework/tab-pages "Tab Pages")[Content Scripts](https://docs.plasmo.com/framework/content-scripts "Content Scripts")</content>
</page>

<page>
  <title>Tab Pages – Plasmo</title>
  <url>https://docs.plasmo.com/framework/tab-pages</url>
  <content>Tab Pages is a feature unique to the Plasmo framework. Unlike [Extension Pages](https://docs.plasmo.com/framework/ext-pages), Tab Pages are just regular web pages shipped with your extension bundle. Extensions generally redirect to or open these pages programmatically, but you can link to them as well.

Use Cases[](#use-cases)
-----------------------

*   A page to show when a user first installs your extension.
*   A dedicated page for authentication
*   When you need a more elaborate routing setup

Examples[](#examples)
---------------------

*   [with-tabs (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-tabs)
*   [rfc-182 (opens in a new tab)](https://github.com/PlasmoHQ/plasmo-test/tree/main/rfc/rfc-182-tabs)

Usage[](#usage)
---------------

To add a tab:

1.  Create a `tabs` folder in the source directory (project root or `src`)
2.  Add a `.tsx` file such as `delta-flyer.tsx`
3.  Export a default React component:

Your tab page will be available under the `/tabs` path in the extension bundle. It will be accessible from the browser under the URL:

[Extension Pages](https://docs.plasmo.com/framework/ext-pages "Extension Pages")[Sandbox Pages](https://docs.plasmo.com/framework/sandbox-pages "Sandbox Pages")</content>
</page>

<page>
  <title>Content Scripts – Plasmo</title>
  <url>https://docs.plasmo.com/framework/content-scripts</url>
  <content>Content scripts run in the context of web pages in an _isolated world_. This allows multiple content scripts from various extensions to coexist without conflicting with each other's execution and to stay isolated from the page's JavaScript.

A script that ends with `.ts` will not have front-end runtime (react/vue/svelte) bundled with it and won't be treated as a ui script, while a script that ends in `.tsx`, `.vue` or `.svelte`, will be.

### Use cases:[](#use-cases)

*   Scraping data from the current web page
*   Selecting, finding, and styling elements from the current web page
*   [Injecting UI elements into the current web page](https://docs.plasmo.com/framework/content-scripts-ui)
*   [Injecting code into the "main world" context](https://docs.plasmo.com/framework/content-scripts#injecting-into-the-main-world)

Adding a single content script[](#adding-a-single-content-script)
-----------------------------------------------------------------

Create a `content.ts` file, export an empty object and hack away!

Reload your extension, open a web page, then open its inspector:

See [with-content-script (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-content-script) for a full example.

Adding multiple content scripts[](#adding-multiple-content-scripts)
-------------------------------------------------------------------

Create a `contents` directory for multiple content scripts, and add your content scripts there. Make sure their names describe what they do!

See [with-many-content-scripts (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-many-content-scripts) for an example.

Config[](#config)
-----------------

Sometimes, you'll want to run a content script on certain pages. You can provide a custom content script configuration by exporting a config object from your content script:

Working with this configuration object is a breeze thanks to the exported `PlasmoCSConfig` type 🥳.

To learn more about the config and each property, [check out Chrome's official documentation (opens in a new tab)](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#static-declarative).

Injecting into the main world[](#injecting-into-the-main-world)
---------------------------------------------------------------

To modify the `window` object from your content script, you must inject code into the "main world."

Starting from Plasmo `v0.65.0`, Plasmo content script may specify a `world` property within the config:

The above script will be injected into the main world.

To manually inject a main world script, use the `chrome.scripting.executeScript` API. First, manually add the scripting permission in your [package.json's 'manifest.permissions' array](https://docs.plasmo.com/framework/customization/manifest):

Then, inject your content script into the main world by calling `chrome.scripting.executeScript` from your background service worker:

For the `func` key, you can pass in a TS function from your project. It will be transpiled into JS when your extension bundles. You may also use the `files` key to inject a file from the root of the built bundle.

See [with-main-world (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-main-world) for an example.

Fetching external API and CORS[](#fetching-external-api-and-cors)
-----------------------------------------------------------------

Because content scripts run within the context of a web page, they are subject to the same-origin policy. To mitigate CORS restrictions, you can use the [Plasmo Messaging API](https://docs.plasmo.com/framework/messaging#message-flow) to proxy the request via your background service worker.

Importing resources[](#importing-resources)
-------------------------------------------

To import external assets into your content script, you can use the [`url:` scheme](https://docs.plasmo.com/framework/import#url):

The `url:` scheme will automatically resolve the `something.js` asset and add it to the `web_accessible_resources` declaration in the built bundle. The above `myFile` variable will be a string containing the URL to the asset:

Alternatively, you can use the [`data-base64`](https://docs.plasmo.com/framework/import#data-base64) or the [`data-text`](https://docs.plasmo.com/framework/import#data-text) scheme to import and embed the asset directly into your code. For small assets, these schemes should work well.

[Sandbox Pages](https://docs.plasmo.com/framework/sandbox-pages "Sandbox Pages")[Content Scripts UI](https://docs.plasmo.com/framework/content-scripts-ui "Content Scripts UI")</content>
</page>

<page>
  <title>Content Scripts UI – Plasmo</title>
  <url>https://docs.plasmo.com/framework/content-scripts-ui</url>
  <content>Plasmo has first-class support for mounting React, Svelte3, or Vue3 components into the current webpage. This feature is called content scripts UI (CSUI).

An extension can have as many CSUI as needed, with each CSUI targeting a group of webpages or a specific webpage by [exporting the config object](https://docs.plasmo.com/framework/content-scripts#config). To start injecting UI using React:

1.  Create a `content.tsx`
2.  Export a default React component
3.  Profit 🎉

See [with-content-scripts-ui (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-content-scripts-ui) for a full example.

### Config[](#config)

Content scripts UI are a subset of content scripts. Thus, you can [export a config object](https://docs.plasmo.com/framework/content-scripts#config) just as you would a regular Plasmo content script.

How does Plasmo CSUI work?[](#how-does-plasmo-csui-work)
--------------------------------------------------------

**TL;DR**: Plasmo creates a [Shadow DOM (opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) and mounts your exported component onto it. This isolation technique prevents the web page's style from affecting your component's styling and vice-versa.

For more details, please see the [Life Cycle of Plasmo CSUI](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle).

[Content Scripts](https://docs.plasmo.com/framework/content-scripts "Content Scripts")[Life Cycle](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle "Life Cycle")</content>
</page>

<page>
  <title>Life Cycle of Plasmo CSUI – Plasmo</title>
  <url>https://docs.plasmo.com/framework/content-scripts-ui/life-cycle</url>
  <content>Plasmo's CSUI orchestrates a lifecycle dedicated to mounting and unmounting your React, Vue, or Svelte components in a content script. Although each UI library/framework has a slightly different mounting API, the top-level lifecycle is largely the same:

1.  Get an [`Anchor`](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle#anchor)
2.  Create or locate a [`Root Container`](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle#root-container)
3.  [Render](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle#renderer) the component onto the `Root Container`

Terminologies[](#terminologies)
-------------------------------

Anchor[](#anchor)
-----------------

A Plasmo CSUI anchor is defined by the following type:

By default, the CSUI lifecycle creates an overlay anchor using the `document.body` element:

If any anchor-getter function is defined and exported, the CSUI lifecycle will use the returned element and the relevant anchor type instead. Since the anchor-getter functions can be async, you also have the power to control _when_ Plasmo mounts your component. For example, you can wait for a specific element to appear on the page before mounting your component.

The anchor is passed down to the CSUI via the anchor props. You can access it as follow:

### Overlay[](#overlay)

Overlay anchors spawn `CSUI Overlay Containers` which are batch-mounted onto a single `Root Container` element per CSUI. The `Overlay Containers` are absolutely positioned relative to each anchor's element with maxed out z-index. Then, your exported `CSUI Component` is mounted onto each `Overlay Container`:

To specify a single overlay anchor, export a `getOverlayAnchor` function:

To specify a list of overlay anchors, export a `getOverlayAnchorList` function:

#### Update Position[](#update-position)

The default `Overlay Container` listens to the window scroll event to align itself with the anchor element. You can customize how the `Overlay Container` refreshes its absolute positioning by exporting a `watchOverlayAnchor` function. The example below refreshes the position every 8472ms:

Check [with-content-scripts-ui/contents/plasmo-overlay-watch.tsx (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-content-scripts-ui/contents/plasmo-overlay-watch.tsx) for an example.

### Inline[](#inline)

Inline anchor embeds your `CSUI Component` directly into the web page. Each anchor spawns a `Root Container` appended next to its target element. Within each `Root Container`, an `Inline Container` is created which is then used to mount the exported `CSUI Component`:

To specify a single inline anchor, export a `getInlineAnchor` function:

To specify single inline anchor with insert position:

To specify a list of inline anchors, export a `getInlineAnchorList` function:

To specify a list of inline anchors with insert position:

Check [with-content-scripts-ui/contents/plasmo-inline.tsx (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-content-scripts-ui/contents/plasmo-inline.tsx) for an example.

Root Container[](#root-container)
---------------------------------

The `Root Container` is where your `CSUI Component` is mounted. The built-in `Root Container` is a ShadowDOM element with the `plasmo-csui` custom tag. This allows you to style the `Root Container` and their exported components without being impacted by the web page's styles.

### Custom DOM Mounting[](#custom-dom-mounting)

The `Root Container` creates a `shadowHost` which gets injected into the web page's DOM tree. By default, Plasmo injects the `shadowHost` after the element for an inline anchor, and before the `document.body` for an overlay anchor. To customize this behavior, export a `mountShadowHost` function:

### Closed Shadow Root[](#closed-shadow-root)

By default, the shadow root is "open," allowing anyone (developer and extension user) to inspect the hierarchy of the ShadowDOM. To override this behavior, export a `createShadowRoot` function:

### Custom Styles[](#custom-styles)

The built-in ShadowDOM provides a convenient mechanism for extension developers to safely style their components by exporting a `getStyle` function that returns an [HTML style element (opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style).

For further guidance on styling CSUI, please read [Styling Plasmo CSUI](https://docs.plasmo.com/framework/content-scripts-ui/styling).

### Custom Root Container[](#custom-root-container)

Sometimes, you'll want to completely replace Plasmo's Shadow DOM container implementation to fit your needs. For example, you might want to piggyback on an element within the web page itself instead of creating a new DOM element. To do so, export a `getRootContainer` function:

Some reasons you'd want to do this:

*   The extension needs to [absorb the styling of the host webpage (opens in a new tab)](https://github.com/PlasmoHQ/plasmo/issues/10#issuecomment-1149499252)
*   The extension needs to mount the component directly into the webpage instead of using a shadow DOM
*   The extension needs to use an [iframe (opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), instead

Check [with-content-scripts-ui (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-content-scripts-ui/contents/plasmo-root-container.tsx) for an example.

Renderer[](#renderer)
---------------------

The `Renderer` is in charge of observing the website's DOM to detect the presence of each `Root Container` and tracking the linking between each anchor's element and its `Root Container`. Once a stable `Root Container` is determined, the `Renderer` mounts the exported `CSUI Component` into the `Root Container` using either an `Inline Container` or an `Overlay Container`, depending on the type of the `Anchor`.

### Detecting and Optimizing Root Container Removal[](#detecting-and-optimizing-root-container-removal)

When a webpage changes its DOM structure, the `Root Container` might be removed. For example, given an email client filled with inbox items, and a CSUI injected inline next to each item. When an item is deleted, the root container will be removed as well.

To detect `Root Container` removal, the `CSUI Renderer` compares each mounted container's root against the `window.document` object. This check can be optimized to O(1) by exporting a `getShadowHostId` function:

The function also allows developers to customize the id for each anchor found:

### Custom Renderer[](#custom-renderer)

Developers may export a `render` function to override the default renderer. You might need this ability to:

*   Provide a custom `Inline container` or `Overlay container`
*   Customize the mounting logic
*   Provide a custom `MutationObserver`

For example, to use an existing element as a custom container:

How to dynamically create a custom container:

To utilize the built-in `Inline Container` or `Overlay Container`:

If you need to customize the MutationObserver, do not export an anchor-getter function. Otherwise, the built-in MutationObserver will still be spawned.

[Content Scripts UI](https://docs.plasmo.com/framework/content-scripts-ui "Content Scripts UI")[Styling](https://docs.plasmo.com/framework/content-scripts-ui/styling "Styling")</content>
</page>

<page>
  <title>Background Service Worker – Plasmo</title>
  <url>https://docs.plasmo.com/framework/background-service-worker</url>
  <content>An extension's background service worker is powerful because it runs in the [service worker context (opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers). For example, when in this context, you no longer need to worry about CORS and can fetch resources from any origin. It is also common to offload heavy computation to the background service worker.

To build your first background service worker, create a `background.ts` file in the root directory, and start hacking 💪

Reload the extension, then open its "Service Worker inspector":

You should see what we've logged in the inspector:

See [with-background (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-background) for a complete example.

Persisting state[](#persisting-state)
-------------------------------------

The worker becomes idle after a few seconds of inactivity, and the browser will kill its process entirely after 5 minutes. This means all state (variables, etc.) is lost unless you use a storage engine.

The simplest way to persist your background service worker's state is to use the [storage API](https://docs.plasmo.com/framework/storage).

The more advanced way is to send the state to a remote database via a fetch call or WebSocket.

[Styling](https://docs.plasmo.com/framework/content-scripts-ui/styling "Styling")[Messaging](https://docs.plasmo.com/framework/messaging "Messaging")</content>
</page>

<page>
  <title>Styling Plasmo CSUI – Plasmo</title>
  <url>https://docs.plasmo.com/framework/content-scripts-ui/styling</url>
  <content>[Plasmo CSUI's built-in `Root Container`](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle#root-container) allows extension developers to safely style their components. It ensures that for the most part:

*   The exported style does not leak to the web page
*   The web page's style does not influence the component's styling

See [caveats](https://docs.plasmo.com/framework/content-scripts-ui/styling#caveats) for when it does not work.

Raw CSS Text[](#raw-css-text)
-----------------------------

To style your CSUI, export a `getStyle` function:

Import Stylesheet[](#import-stylesheet)
---------------------------------------

To import CSS/LESS/SASS files, combine the `getStyle` API with the [`data-text` import scheme](https://docs.plasmo.com/framework/import#data-text):

CSS-in-JS[](#css-in-js)
-----------------------

The `getStyle` API can also be used to hydrate CSS-in-JS style cache, for example when using [`with emotion` (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-emotion):

CSS Modules[](#css-modules)
---------------------------

To utilize CSS modules, import the stylesheet twice:

Custom Font[](#custom-font)
---------------------------

To use a custom font in your CSUI, you must import the font inside a CSS file and declare it in the `css` property of the [config object](https://docs.plasmo.com/framework/content-scripts#config). The browser does not recognize Font assets if declared inside a ShadowDOM. You have to load them in the global scope.

1.  Add your font in the `assets` directory (e.g `/assets/Fascinate.woff2`)
2.  Create a `font.css` file next to your content script, importing the font inline using the [`data-base64`](https://docs.plasmo.com/framework/import#data-base64) scheme:

3.  Declare the file in the `css` property of the content script config:

4.  Once the browser registers the font, you can reference it inside your CSS style:

See [with-content-scripts-ui/contents/plasmo-overlay.tsx (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-content-scripts-ui/contents/plasmo-overlay.tsx) for a full example.

Styling the Shadow DOM[](#styling-the-shadow-dom)
-------------------------------------------------

Use the IDs `#plasmo-shadow-container` and `plasmo-inline` to alter the `Root Container` styles in your CSS:

Inherit the Web Page's Style[](#inherit-the-web-pages-style)
------------------------------------------------------------

To inherit the web page's style, override the built-in `Root Container` to mount your component directly into the web page's DOM. [Click here for more details](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle#custom-root-container).

Caveats[](#caveats)
-------------------

There are many situations that the framework's generic style encapsulation cannot handle (yet). Here are some common gotchas:

### CSS Variables[](#css-variables)

CSS Variables are shared across every frame within the same browser tab. This means that if the webpage declares some CSS variables at the `:root` context, it will be prioritized over yours.

To mitigate CSS variable sharing between CSUI and the web page, you can either:

*   Declare a unique prefix namespace for your CSS variables
*   Hoist your CSS variable under a `:host` scope
*   Mount your component inside an iframe, with its own head and body

### Root Container Style[](#root-container-style)

If the host webpage uses a global `*` specifier to style its page, it can potentially override the `Root Container` style. For example:

The above code will cause the root container to have block display. In cases like these, overriding the root container style with an inline style will help keep the container consistent.

There may exist some CSS styling declarations that cannot be overridden to alter the the `Root Container` styles. In those cases, the `!important` flag can be used as a workaround.

[Life Cycle](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle "Life Cycle")[Background SW](https://docs.plasmo.com/framework/background-service-worker "Background SW")</content>
</page>

<page>
  <title>Messaging API – Plasmo</title>
  <url>https://docs.plasmo.com/framework/messaging</url>
  <content>[](https://github.com/PlasmoHQ/plasmo/blob/main/LICENSE)[](https://www.npmjs.com/package/@plasmohq/messaging)[](https://www.twitter.com/plasmohq)[](https://www.twitch.tv/plasmohq)[](https://www.plasmo.com/s/d)

Plasmo's Messaging API makes communication between different parts of your extension easy. Add a file to your `messages` directory, and Plasmo will handle all the rest. Plasmo Messaging is a declarative, type-safe, functional, promise-based API for sending, relaying, and receiving messages between your extension components.

Installation[](#installation)
-----------------------------

### 1\. Install dependency[](#1-install-dependency)

The `@plasmohq/messaging` library is kept in a separate repository. You will first have to install it with your package manager.

### 2\. Create background folder & file[](#2-create-background-folder--file)

The `@plasmohq/messaging` library requires the background service worker to live inside a `background/index.ts` folder, and all message handlers to live inside `background/*` folders.

If you already have a `background.ts` or `background.js` file, you will have to create a `background` folder and move your script to `background/index.ts` or `background/index.js`.

If you don't already have a `background` folder, create a `background` folder and create a new, empty `background/index.ts` or `background/index.js` file.

You will now be able to create new handlers inside the `background/` subfolder. For example, to create a `messages` handler with the name `ping`, you would create a `background/messages/ping.ts`. See the rest of the documentation to learn about the different types of handlers available to you, and how to configure them.

At this point, your folder structure might look like this.

### 3\. Generate static types[](#3-generate-static-types)

On compilation, Plasmo will generate static types for all of your message handlers. This will happen automatically if you have the dev server running; it will also happen automatically each time you build. The `sendToBackground` and `relayMessage` functions both take a `name` field as part of their params object; this `name` field will be statically typed with the names of all of your message handlers.

### 4\. That's all[](#4-thats-all)

You have now successfully installed Plasmo's messaging library.

TL;DR[](#tldr)
--------------

Examples[](#examples)
---------------------

*   [with-messaging (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-messaging)

Message Flow[](#message-flow)
-----------------------------

Use the Message Flow to initiate one-time messages between extension pages, tab pages or content scripts with the background service worker. This flow is useful to offload heavy computation to the background service worker or to bypass CORS.

The background service worker is a message hub with REST-style API handlers. To create a message handler, create a ts module in the `background/messages` directory. The file name should be the message name, and the default export should be the handler function:

Extension pages, content scripts, or tab pages can send messages to these handlers using the `@plasmohq/messaging` library. Since Plasmo Framework orchestrates your handlers behind the scenes, the message names are typed and will enable IntelliSense in your editor:

To send a message from a content script thats in the main world you'll have to include your extension's id in the request. Your extension's id can be found in chrome's extension manager window once you've built and added it to your browser.

Relay Flow[](#relay-flow)
-------------------------

The Relay Flow enables communication between a target webpage and a background service worker using a lightweight message handler called a relay. This relay is registered with the `relayMessage` function in a [content script](https://docs.plasmo.com/framework/content-scripts).

The `relayMessage` function abstracts the `window.postMessage` mechanism, registering a listener that checks for messages matching the same origin and forwards them to the background service worker. These messages are then processed by the appropriate [message flow handlers](https://docs.plasmo.com/framework/messaging#message-flow) registered under `background/messages`.

The `sendToBackgroundViaRelay` function sends messages through the relay and waits for a response. It generates a unique instance ID for each message to ensure proper handling and response tracking.

You may view the implementation of these functions in the [GitHub repository (opens in a new tab)](https://github.com/PlasmoHQ/plasmo/blob/main/api/messaging/src/relay.ts).

This method provides an alternative to the ["externally\_connectable" (opens in a new tab)](https://developer.chrome.com/docs/extensions/develop/concepts/messaging#external-webpage) method described in the Chrome extension documentation.

### Setting Up a Relay[](#setting-up-a-relay)

To set up a relay, use the `relayMessage` function in a content script. A content script can have multiple relays. Given the `ping` message handler from the previous example, and the website `www.plasmo.com`:

In the code of the target webpage (e.g., `plasmo.com`), you can send messages using the registered relay using `sendToBackgroundViaRelay` as follows:

To relay messages from contexts where `chrome.runtime` is unavailable, you can use the `relay` function:

Ports[](#ports)
---------------

The Messaging Ports API is a high-level abstraction over the chrome runtime's [port API (opens in a new tab)](https://developer.chrome.com/docs/extensions/mv3/messaging/#connect) to establish long-lived connections with the background service worker.

The current implementation focuses on establishing connections to a port listener in the background service worker:

To create a BGSW port handler, create a ts module in the `background/ports` directory. The file name will be the port name, and the default export will be the handler function:

In your extension page, get the port using the `getPort` utility under the `@plasmohq/messaging/port`, **OR** use the `usePort` hook, keep in mind that `usePort` currently relies on React hooks so you will need to use it within a React component. This example shows the usage of `getPort` within a Svelte component:

Here's an example of `usePort` in React, the data will always reflect the latest response from the port handler:

E2E Type Safety (WIP)[](#e2e-type-safety-wip)
---------------------------------------------

End-to-end request/response body type-safety is in progress at [#334 (opens in a new tab)](https://github.com/PlasmoHQ/plasmo/issues/334). In the meantime, you can use the provided generic types:

[Background SW](https://docs.plasmo.com/framework/background-service-worker "Background SW")[Storage](https://docs.plasmo.com/framework/storage "Storage")</content>
</page>

<page>
  <title>Environment Variables – Plasmo</title>
  <url>https://docs.plasmo.com/framework/env</url>
  <content>Plasmo offers first-class support for environment variables. This allows you to customize your extension to fit the need of each browser and development environment from the same codebase.

Examples[](#examples)
---------------------

*   [with-env (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-env)

Built-in Environment Variables[](#built-in-environment-variables)
-----------------------------------------------------------------

Plasmo framework provides the following built-in client-side environment variables:

*   `NODE_ENV`: Either `development` or `production` depending on the build command
*   `PLASMO_TARGET`: The specified target, e.g. `chrome-mv3`, specified by [the `--target` flag](https://docs.plasmo.com/framework/workflows/build#with-a-specific-target)
*   `PLASMO_BROWSER`: The name of the target browser, e.g. `chrome`
*   `PLASMO_MANIFEST_VERSION`: The manifest version, e.g. `mv3` or `mv2`
*   `PLASMO_TAG`: The build tag, e.g. `dev`, `prod` or a custom one specified by [the `--tag` flag](https://docs.plasmo.com/framework/workflows/build#with-a-custom-tag)

Custom Environment Variables[](#custom-environment-variables)
-------------------------------------------------------------

To add environment variables accessible to the extension, create a `.env` file:

### NODE\_ENV Specific Env[](#node_env-specific-env)

To separate environment variables between `dev` and `build`, you can use the following files:

*   `.env.development`
*   `.env.production`

If there is a `CRX_PUBLIC_KEY` environment variable in `.env.development` but not in `.env.production` or `.env`, it will only be available in `plasmo dev` but not `plasmo build`.

### Bundle Specific Env[](#bundle-specific-env)

Plasmo Framework also provides environment variables specific to a certain [build target](https://docs.plasmo.com/framework/workflows/build#with-a-specific-target) or [build tag](https://docs.plasmo.com/framework/workflows/build#with-a-custom-tag) when creating the final bundle. Given the following build command:

The following env files will be considered, ordered by priority:

*   `.env.safari`
*   `.env.alpha`
*   `.env`

### Local Env[](#local-env)

Plasmo also supports the following environment file names (Next.js developers will find these familiar):

*   `.env.<browser>.local`
*   `.env.<tag>.local`
*   `.env.<NODE_ENV>.local`
*   `.env.local`

Files with `.local` at the end of their names have a higher priority than non-local ones. For example, `.env.local` has higher priority than `.env.production` and `.env.development`.

Within the same namespace, however, the cascading order is as expected. This feature utilizes a cascading/overriding strategy for environment variables using the [`dotenv` package (opens in a new tab)](https://www.npmjs.com/package/dotenv).

### Prioritized Env[](#prioritized-env)

To include an environment file that is prioritized above all, use the `--env` flag. The name of this file can be named anything:

Using Environment Variables[](#using-environment-variables)
-----------------------------------------------------------

Environment variables are a powerful feature that allow you to customize your extension to fit the needs of each browser and development environment from the same codebase.

### In Source Code[](#in-source-code)

To reference an environment variable in your source code, use the full path `process.env.<ENV_NAME>`. For example:

See [with-env (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-env) for more details about using .env variables.

### In Remote Code Import[](#in-remote-code-import)

Use public environment variables if you are [importing remote code](https://docs.plasmo.com/framework/remote-code):

### In Content Scripts Config[](#in-content-scripts-config)

You can also use environment variables in the [content script config exports](https://docs.plasmo.com/framework/content-scripts#customizing-content-script-config):

### In Manifest Overrides[](#in-manifest-overrides)

Plasmo lets you [override the final generated extension manifest via the `manifest` property of the package.json file](https://docs.plasmo.com/framework/customization/manifest). Taking one step further, Plasmo also parses any environment variables used in the manifest overrides:

You can use public (prefixed with `PLASMO_PUBLIC`) and private environment variables in your manifest override. 😎

[Storage](https://docs.plasmo.com/framework/storage "Storage")[Import Resolution](https://docs.plasmo.com/framework/import "Import Resolution")</content>
</page>

<page>
  <title>Storage API – Plasmo</title>
  <url>https://docs.plasmo.com/framework/storage</url>
  <content>[](https://github.com/PlasmoHQ/plasmo/blob/main/LICENSE)[](https://www.npmjs.com/package/@plasmohq/storage)[](https://www.twitter.com/plasmohq)[](https://www.twitch.tv/plasmohq)[](https://www.plasmo.com/s/d)

`@plasmohq/storage` is a utility library from [plasmo (opens in a new tab)](https://www.plasmo.com/) that abstracts the persistent storage API available to browser extensions. It falls back to localStorage when the extension storage API is unavailable, allowing for state sync between extension pages, content scripts, background service workers and web pages.

> This library will enable the `storage` permission automatically if used as a **dependencies** in a [Plasmo framework (opens in a new tab)](https://docs.plasmo.com/) project

Installation[](#installation)
-----------------------------

The package exports the following modules, in both ESM and CJS format:

Usage Examples[](#usage-examples)
---------------------------------

*   See [with-storage (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-storage) for an example of how to use this library to sync state between options and popups.
*   See [with-redux (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-redux) for an example of how to use this library as your Redux persistent layer (crucial for MV3).
*   See [MICE (opens in a new tab)](https://github.com/PlasmoHQ/mice) for an experimental use case of this library integrated with WebRTC to pipe messages between browsers via an extension.

Storage[](#storage)
-------------------

The base Storage API is designed to be easy to use. It is usable in every extension runtime such as background service workers, content scripts and extension pages.

Get/set data without the need to JSON.stringify/parse. As long as the data you are storing is serializable (plain object or of primitive type), it can be stored:

### Customizing the storage area[](#customizing-the-storage-area)

The storage area defaults to "sync", which means the data is synced across all instances of Chrome where the user is logged in.

You can see all of the other possible scopes Plasmo supports in the [Chrome Storage API documentation (opens in a new tab)](https://developer.chrome.com/docs/extensions/reference/api/storage#storage_areas).

### Automatically copy data to localStorage[](#automatically-copy-data-to-localstorage)

The code above will copy the data to Web localStorage when used with content scripts or extension pages.

### Watch (for state sync)[](#watch-for-state-sync)

To watch for changes when using the Storage API:

This can be used as a layer to communicate messages across your extension. We demonstrate this in the [with-redux (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-redux) example.

Secure Storage[](#secure-storage)
---------------------------------

The SecureStorage API extends Storage with data encryption and decryption for at-rest cold storage of sensitive keys. It utilizes the [Web Crypto `SubtleCrypto` API (opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) which only works in secure contexts (HTTPS).

React Hook API[](#react-hook-api)
---------------------------------

The hook API is designed to streamline the state-syncing workflow between the different pieces of an extension. There are many ways it can be used, but first and foremost you will want to import the hook into your React component:

### Watch and render a value[](#watch-and-render-a-value)

### With a custom storage instance[](#with-a-custom-storage-instance)

### Rendering initial value WITHOUT persisting[](#rendering-initial-value-without-persisting)

"Persisting" means writing into the internal memory.

By not persisting the value, only this specific instance of the hook will render the given initial value when there is no value in storage. Other instances can either show `undefined` OR specify their own initial value. To elaborate on this:

Given a `popup.tsx` that sets a static initial value:

If we subscribe to this key in `content.tsx`, we will see it be `undefined` until `setHailingFrequency` is called with a defined value:

If we subscribe to this key in `options.tsx`, but with a different static initial value, we will see that value instead:

With the above setup, suppose we call `setHailingFrequency("8472")` in any of the instances above, we will see that all instances will now show "8472" and will now track the value in storage instead of the initial value.

### Rendering AND persisting initial value[](#rendering-and-persisting-initial-value)

By using a function instead of a static value, the initial value will be persisted in storage memory. The initialize function has one parameter which is the existing value in storage. If there is no value, it is `undefined`.

Let's say we have a `popup.tsx` that initialize the state to "42" if there is nothing in storage:

Then, if we make a new hook instance in our `content.tsx` or `options.tsx`, we will see the initial value that persisted, without calling `setHailingFrequency`:

### Advanced usage[](#advanced-usage)

When dealing with form input or real-time input, you might need the following:

### Usage with Firefox[](#usage-with-firefox)

To use the storage API on Firefox during development you need to add an Add-on ID to your manifest, otherwise, you will get this error:

> Error: The storage API will not work with a temporary addon ID. Please add an explicit addon ID to your manifest. For more information see [https://mzl.la/3lPk1aE (opens in a new tab)](https://mzl.la/3lPk1aE).

To add an Add-on ID to your manifest, add this to your `package.json`:

The format of Add-on IDs differ between manifest versions.

*   Manifest V2: `your-id@example.com`
*   Manifest V3: `{ed7ba470-8e54-465e-825c-99712043e01c}` (any UUID)

Once your extension is published, the Add-on ID defined in the `package.json` file _should_ be displayed in your extension's Developer Page under _"Technical Details > UUID"_.

**Note:** The Add-on ID used during development (i.e. the one defined in the manifest) will likely be the one Mozilla assigns to your when publishing. If it's not and one is generated for you, you will have to update the `package.json` file with the new ID.

Add-on IDs are unique and the same one cannot be used for multiple extensions (both manifest versions).

[Messaging](https://docs.plasmo.com/framework/messaging "Messaging")[Environment Variables](https://docs.plasmo.com/framework/env "Environment Variables")</content>
</page>

<page>
  <title>Import Resolution – Plasmo</title>
  <url>https://docs.plasmo.com/framework/import</url>
  <content>Plasmo framework ships with its own code/asset bundler tailored specifically for extension development. It supports raw/transformed bundle inlining, asset mirroring, environment injection, and more.

Supported File Types[](#supported-file-types)
---------------------------------------------

The following files can be imported into Source Code modules and will be transformed accordingly:

Paths[](#paths)
---------------

Plasmo has built-in support for most common import paths such as relative import, `node_module` package import, and `ESM exports` import. It also provides project-relative paths via tilde and absolute imports. To customize your import path further, check out the [Alias Imports Section](https://docs.plasmo.com/framework/customization/alias).

### Tilde (`~/`)[](#tilde-)

The tilde import path is a convenient shortcut for the "source code module directory." Plasmo only considers files ending in the following extension to be "source code module":

When used outside a source code module or with an asset [scheme](https://docs.plasmo.com/framework/import#schemes) such as `data-base64`, `data-text`, or `url`, the tilde (`~`) **always** resolves to the project's root directory where the `package.json` resides. Thus:

*   `~rulesets/test.json` used in the [manifest override inside `package.json`](https://docs.plasmo.com/framework/customization/manifest) resolves to `/rulesets/test.json`
*   `data-base64:~assets/image.png` resolves to `/assets/image.png`
*   `url:~src/code.js` resolves to `/src/code.js.`

Suppose the tilde is by itself without a scheme and is being used to import a source code module from another source code module. In that case, it has two behaviors depending on whether you are using the default setup or the [the `src` directory setup](https://docs.plasmo.com/framework/customization/src):

*   With the default setup, `~` points to the project root.
*   With the `src` directory setup, `~` points to the `src` directory. Thus `~core/code-module.tsx`, resolves to `/src/core/code-module.tsx`.

### Absolute (`/`)[](#absolute-)

Unlike tilde, the absolute import path will always resolve to the project root (where the `package.json` resides) regardless of the `src` directory. Use the absolute import path if you prefer complete consistency.

### Relative (`./`, `../`)[](#relative--)

Use the `./` prefix to import files using paths relative to the current file. For example, to import a file from the same directory as the existing file, use `./file-name`. To import a file from a subdirectory, use `./subdirectory/file-name`. To import a file from a parent directory, use `../file-name`.

Schemes[](#schemes)
-------------------

Plasmo introduces several _import schemes_ that developers can use to import asset files into the extension bundle. Schemes follow the `<scheme>:<file path>` pattern. For example, `data-base64:~/assets/image.png` is a valid import path.

### raw[](#raw)

The `raw` scheme instructs Plasmo to:

1.  Copy the file into the extension bundle at the root level
2.  Assign a content hash to distinguish it from other files with similar names

The imported variable is an absolute URL to the file at runtime:

### raw-env[](#raw-env)

The `raw-env` scheme is like the `raw` scheme but with added [environment variables](https://docs.plasmo.com/framework/env). For example, if you have a file `~/assets/config.json` with the following content:

And you declared an environment variable `PLASMO_PUBLIC_URL` with the value `https://www.plasmo.com`, then the resulting file will be:

### url[](#url)

The `url` scheme instructs Plasmo to:

1.  Transform/bundle/optimize the file for browser consumption (html/js/css/images)
2.  Copy the result + dependencies into the extension bundle at the root level
3.  Assign a content hash to distinguish it from other files with similar names
4.  (Content Script only) Add the file to the `web_accessible_resources` entry

The imported variable is an absolute URL to the file at runtime:

### data-text[](#data-text)

The `data-text` scheme instructs Plasmo to:

1.  Read the file's content
2.  Transform/bundle/optimize the file for browser consumption (html/js/css/images)
3.  Inline the content as a single bundle in a string

### data-text-env[](#data-text-env)

The `data-text` scheme instructs Plasmo to:

1.  Read the file's content
2.  Inject public environment variables
3.  Transform/bundle/optimize the file for browser consumption (html/js/css/images)
4.  Inline the content as `string`

`.env`

`code.json`

`content.tsx`

### data-base64[](#data-base64)

The `data-base64` scheme instructs Plasmo to:

1.  Read the file's content
2.  Transform/bundle/optimize the file for browser consumption (html/js/css/images)
3.  Convert the result to base64 string and inline it into the code

### data-env[](#data-env)

The `data-env` scheme instructs Plasmo to:

1.  Read the file's content
2.  Inject public environment variables
3.  Transform/bundle/optimize the file for browser consumption (html/js/css/images)
4.  Return appropriate runtime asset result

### react:\*.svg[](#reactsvg)

The `react` scheme transforms any svg assets into a React component (via SVGR and SVGO):

[Environment Variables](https://docs.plasmo.com/framework/env "Environment Variables")[Assets](https://docs.plasmo.com/framework/assets "Assets")</content>
</page>

<page>
  <title>Extension Icon – Plasmo</title>
  <url>https://docs.plasmo.com/framework/icon</url>
  <content>The Plasmo framework automatically generates smaller resolution versions of icons for the built bundle. Thus, all you need to work on is the high-fidelity version!

By default, Plasmo reads the `assets/icon.png` file for the extension icon. Optionally, you can use these names instead of `icon`:

The alternative names are helpful to clarify the size of the original icon. However, Plasmo will only pick one file.

Development Icon[](#development-icon)
-------------------------------------

In [development mode](https://docs.plasmo.com/framework/workflows/dev), Plasmo converts the icon to grayscale to help distinguish it from the production bundle:

### Custom Development Icon[](#custom-development-icon)

If you don't want the default grayscale behavior, you can place an `icon.development.png` file in the `assets` directory. Plasmo will use this file instead of the `icon.png` file in development mode.

Tag Specific Icons[](#tag-specific-icons)
-----------------------------------------

To use a different icon for a specific [build tag](https://docs.plasmo.com/framework/workflows/build#with-a-custom-tag), name your icon file as follows:

*   `icon.<tag>.png`
*   `icon.<tag>.<NODE_ENV>.png`

Icon Sizes[](#icon-sizes)
-------------------------

Plasmo generates the following icon sizes (in px):

You can override a specific size by placing any of the following files in the `assets` directory:

[Assets](https://docs.plasmo.com/framework/assets "Assets")[Locales](https://docs.plasmo.com/framework/locales "Locales")</content>
</page>

<page>
  <title>Assets – Plasmo</title>
  <url>https://docs.plasmo.com/framework/assets</url>
  <content>Extension bundles can include assets such as images, fonts, binary WASM bundles, and other files. Plasmo provides several methods to work with these assets.

Inline Image[](#inline-image)
-----------------------------

The easiest way to load images inside your extension is to use the `data-base64` scheme. This will inline the image as base64 encoded data in the built bundle of your extension:

Web Accessible Resources[](#web-accessible-resources)
-----------------------------------------------------

Plasmo automatically copies any web-accessible resources declared in [the manifest override](https://docs.plasmo.com/framework/customization/manifest). For example, by specifying the following config in `package.json`:

The files below will be copied into the extension bundle and be available to [`chrome.getURL()` (opens in a new tab)](https://developer.chrome.com/docs/extensions/reference/runtime/#method-getURL):

*   `raw.js` in the root of the project (where package.json is)
*   Any file matching the glob `assets/pic*.png` from the project root
*   `resources/test.json` from the project root

See [with-web-accessible-resources (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-web-accessible-resources)

### Loading Asset during runtime[](#loading-asset-during-runtime)

If you use a package that dynamically loads an asset (e.g. wasm) during runtime and needs a path to the local asset library, note that you need to make your asset folder available using ~assets, e.g.:

While in your js/ts code you need to refer the folder using the absolute path `/`

Assets from `node_modules`[](#assets-from-node_modules)
-------------------------------------------------------

Sometimes, a node package exposes static assets files you must include in your bundle as web-accessible resources. To do so, specify those assets in the `web_accessible_resources` field of the manifest override in `package.json`:

See [with-inbox-sdk (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-inbox-sdk)

[Import Resolution](https://docs.plasmo.com/framework/import "Import Resolution")[Icon](https://docs.plasmo.com/framework/icon "Icon")</content>
</page>

<page>
  <title>Localization and Internationalization – Plasmo</title>
  <url>https://docs.plasmo.com/framework/locales</url>
  <content>Plasmo has built-in support for localization. These concepts should feel familiar to you if you've ever done this in any other Chrome extension.

Plasmo expects your locale files in any of these locations:

*   `/locales/{lang}/messages.json`
*   `/assets/_locales/{lang}/messages.json`
*   `/assets/locales/{lang}/messages.json`

You will need to pick one and stick to it!

English Example[](#english-example)
-----------------------------------

Create a `locales/en/messages.json` file with a JSON mapping between a unique `key` and a locale object:

By default, Plasmo picks the first locale alphabetically available as default. However, you can specify a `default_locale` in your manifest like so:

Even more powerful, you can use environment variables inside your locale files:

The locale files are monitored by Plasmo if they existed before the dev server started. Thus, you can change the locales file and see the changes in the browser without restarting the dev server.

Usage[](#usage)
---------------

With the locale files in place, you can use the `i18n` API to localize your extension.

### Inside source code modules[](#inside-source-code-modules)

To get the locale string inside your components, use the `i18n` API to get the locale message by its `key`:

### Inside package.json and manifest overrides[](#inside-packagejson-and-manifest-overrides)

To reference a locale string inside your manifest overrides, wrap the key inside `__MSG_<key>__`:

Please refer to the [Chrome i18n documentation (opens in a new tab)](https://developer.chrome.com/extensions/i18n) for more information.

If you'd like to see an example showcasing locale, check out [with-locales-i18n (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-locales-i18n) in the [Plasmo examples (opens in a new tab)](https://github.com/PlasmoHQ/examples) repository.

[Icon](https://docs.plasmo.com/framework/icon "Icon")[Remote Code](https://docs.plasmo.com/framework/remote-code "Remote Code")</content>
</page>

<page>
  <title>Customization – Plasmo</title>
  <url>https://docs.plasmo.com/framework/customization</url>
  <content>Framework

Customization

Principles

Plasmo is an **_opinionated_** framework. However, there are cases when it favors flexibility:

1.  When it has yet to formulate a proper abstraction/opinion
2.  When the opinion greatly tampers with the developer's experience
3.  When the topic does not matter

[Remote Code](https://docs.plasmo.com/framework/remote-code "Remote Code")[Manifest Override](https://docs.plasmo.com/framework/customization/manifest "Manifest Override")</content>
</page>

<page>
  <title>Importing Remote Code – Plasmo</title>
  <url>https://docs.plasmo.com/framework/remote-code</url>
  <content>Plasmo automatically bundles all import statements that point to a remote resource using the `https` protocol in build time. This is essential to work with [the remote code restriction in Manifest V3 (opens in a new tab)](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code).

Adding the [Google Analytics 4 (opens in a new tab)](https://developers.google.com/analytics/devguides/collection/ga4) tracking code into our popup is as simple as:

    import "https://www.googletagmanager.com/gtag/js?id=XXXXXX"

The code above is not clean due to the presence of the tracking ID. However, since Plasmo parses the import statement, we can use [environment variables](https://docs.plasmo.com/framework/env) inside the import. Define the tracking ID in a `.env.local` file:

    PLASMO_PUBLIC_GTAG_ID=XXXXXX

Then, use it in your import by prefixing a `$` before its name:

    import "https://www.googletagmanager.com/gtag/js?id=$PLASMO_PUBLIC_GTAG_ID"

See [with-google-analytics (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-google-analytics)

[Locales](https://docs.plasmo.com/framework/locales "Locales")[Principles](https://docs.plasmo.com/framework/customization "Principles")</content>
</page>

<page>
  <title>Overriding the Manifest – Plasmo</title>
  <url>https://docs.plasmo.com/framework/customization/manifest</url>
  <content>The Plasmo Framework extends the `package.json` with a `manifest` field to override the generated extension manifest. The primary use case is to enable features that the Plasmo framework does not _yet_ natively support.

For instance, the Plasmo Framework might not understand that you need to have an `activeTab` permission. You'll need to modify your project's `package.json` like so:

Plasmo will pass over the following fields from the `package.json` to the generated extension manifest:

*   `packageJson.version` -> `manifest.version`
*   `packageJson.displayName` -> `manifest.name`
*   `packageJson.description` -> `manifest.description`
*   `packageJson.author` -> `manifest.author`
*   `packageJson.homepage` -> `manifest.homepage_url`

Using environment variables[](#using-environment-variables)
-----------------------------------------------------------

You can use environment variables inside the manifest overrides. For instance in the [with-storage example (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-storage/package.json):

If the environment variable could not be found, the field will be removed completely from the manifest. This enables working with multiple browser targets by specifying [target-specific environment variables](https://docs.plasmo.com/framework/env#bundle-specific-env).

Using locale template string[](#using-locale-template-string)
-------------------------------------------------------------

You can use [locale](https://docs.plasmo.com/framework/locales) template strings in the manifest overrides:

[Principles](https://docs.plasmo.com/framework/customization "Principles")[Use src Directory](https://docs.plasmo.com/framework/customization/src "Use src Directory")</content>
</page>

<page>
  <title>Using the src directory for source code – Plasmo</title>
  <url>https://docs.plasmo.com/framework/customization/src</url>
  <content>Instead of having your source codes in the root directory, you can put them in a child `src` directory.

\--with-src[](#--with-src)
--------------------------

Creating a Plasmo project with an `src` directory setup is as simple as:

The command above utilizes Plasmo's [example template feature](https://docs.plasmo.com/framework/workflows/new#with-an-example-template).

Manual Setup[](#manual-setup)
-----------------------------

First, copy all your source code files into the `src` directory. Then, for TypeScript to work correctly, you will need to point the resolved `paths` for the `~*` prefix in the `tsconfig.json` file to `"./src/*"`.

The new configuration looks like this:

See [with-src (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-src) for a full example.

[Manifest Override](https://docs.plasmo.com/framework/customization/manifest "Manifest Override")[Replace the HTML](https://docs.plasmo.com/framework/customization/html "Replace the HTML")</content>
</page>

<page>
  <title>Replacing the HTML Templates – Plasmo</title>
  <url>https://docs.plasmo.com/framework/customization/html</url>
  <content>Framework

Customization

Replace the HTML

To replace the default HTML templates, you can create a `.html` file with the same naming convention as the component file. For example, if you have a `popup.tsx` and would like to override the HTML, create a `popup.html` file:

popup.html

    <!DOCTYPE html>
    <html>
      <head>
        <title>__plasmo_static_index_title__</title>
        <meta charset="utf-8" />
      </head>
      <body></body>
    </html>

If you have a `popup/index.tsx` file, create a `popup/index.html` file with content similar to the above.

👀

You do not need to include the root element or the script tag. The Plasmo Framework will handle that for you.

[Use src Directory](https://docs.plasmo.com/framework/customization/src "Use src Directory")[Alias Imports](https://docs.plasmo.com/framework/customization/alias "Alias Imports")</content>
</page>

<page>
  <title>Alias Source Code Import – Plasmo</title>
  <url>https://docs.plasmo.com/framework/customization/alias</url>
  <content>There are two methods to override the import path:

*   Using the `paths` property in `tsconfig.json`
*   Using the `alias` property in `package.json`

Alias Local TypeScript Imports[](#alias-local-typescript-imports)
-----------------------------------------------------------------

To alias local imports, use the `paths` mapping in `tsconfig.json`:

You can then use it as follow:

See the example in [bug-244-alias-local-imports (opens in a new tab)](https://github.com/PlasmoHQ/plasmo-test/tree/main/bug/bug-244-alias-local-imports)

Alias External TypeScript Modules[](#alias-external-typescript-modules)
-----------------------------------------------------------------------

To alias external typescript modules, you may use the `paths` mapping pointing to an external directory in `tsconfig.json`:

The import becomes:

Alias External Imports[](#alias-external-imports)
-------------------------------------------------

You can use the `alias` field to map an import path to a file external to your project:

Make sure to also declare that import in a typescript declaration `cool-file.d.ts` file:

And include that file in your `tsconfig.json`:

Then you can use it in your code:

Alias API-Compatible Modules[](#alias-api-compatible-modules)
-------------------------------------------------------------

Use the `alias` field in `package.json` to alias API-compatible modules. You can map to a local file or a dependency package.

### Using Preact instead of React[](#using-preact-instead-of-react)

Since Preact's API is compatible with React, you can alias it like so:

[Replace the HTML](https://docs.plasmo.com/framework/customization/html "Replace the HTML")[Internal Paths](https://docs.plasmo.com/framework/customization/internal-path "Internal Paths")</content>
</page>

<page>
  <title>Customizing Internal Paths – Plasmo</title>
  <url>https://docs.plasmo.com/framework/customization/internal-path</url>
  <content>Plasmo constructs several paths to be used in the bundling process. These paths are used to locate the source code and the output directory for example. This section describes how to customize some of these paths.

Build path[](#build-path)
-------------------------

The default bundle build path is `./build`. To change this behavior, either:

*   Specify the `--build-path` flag:

*   Or use the `PLASMO_BUILD_PATH` top-level environment variable:

This applies to the `dev`, `build` and `package` commands.

Source path[](#source-path)
---------------------------

The default source path is `./src`. To change this behavior, either:

*   Specify the `--src-path` flag:

*   Or use the `PLASMO_SRC_PATH` top-level environment variable:

This applies to the `dev`, `build` and `package` commands.

[Alias Imports](https://docs.plasmo.com/framework/customization/alias "Alias Imports")[Getting Started](https://docs.plasmo.com/itero "Getting Started")</content>
</page>

<page>
  <title>Welcome to Itero: The Browser Extension Cloud – Plasmo</title>
  <url>https://docs.plasmo.com/itero</url>
  <content>Meet Itero, the cloud platform for browser extension development that allows you to iterate faster without a review process, and test new changes with each and every push. Whether you're an individual developer or a team, Itero's easy-to-use platform helps you save time and streamline your workflow.

At [Plasmo (opens in a new tab)](https://www.plasmo.com/), we understand the challenges of testing browser extensions, so we've developed [TestBed](https://docs.plasmo.com/itero/test-bed), our staging environment for browser extension development. With [TestBed](https://docs.plasmo.com/itero/test-bed), you can quickly and easily test your extensions, and instantly push them to beta testers without waiting for a review or manually installing the extension.

Our streamlined integration with the GitHub workflow ensures that each push to your repository is automatically deployed to your beta testers with the [Itero Builder pipeline](https://docs.plasmo.com/itero/builder). This saves you time and effort, allowing you to focus on developing your browser extension and receiving feedback from beta testers.

With [Itero Publisher](https://docs.plasmo.com/itero/publisher), you can publish your browser extension to the Chrome Web Store and Firefox Add-ons Store effortlessly. We also offer the option to publish to the Microsoft Edge Add-ons Store, but you'll need a Microsoft Partner Center account.

If you're looking to convert your extension from MV2 to MV3, Itero has got you covered with our [MV2 to MV3 Converter toolkit](https://docs.plasmo.com/itero/mv2-to-mv3). This makes the conversion process easy and straightforward, ensuring that your extension is compatible with the latest version of the browser.

Want to see Itero in action? Check out our [Testbed](https://docs.plasmo.com/itero/test-bed), [Builder](https://docs.plasmo.com/itero/builder), [Publisher](https://docs.plasmo.com/itero/publisher), and [MV2 to MV3 Converter](https://docs.plasmo.com/itero/mv2-to-mv3) pages for more information on our features and how they can help your business.

[Internal Paths](https://docs.plasmo.com/framework/customization/internal-path "Internal Paths")[TestBed](https://docs.plasmo.com/itero/test-bed "TestBed")</content>
</page>

<page>
  <title>Itero TestBed: Your Browser Extension Testing Solution – Plasmo</title>
  <url>https://docs.plasmo.com/itero/test-bed</url>
  <content>Itero TestBed is a staging environment for browser extensions. With TestBed, you can instantly test your browser extensions without waiting for browser stores to approve your updates or dragging and dropping zip files.

The Benefits of Itero TestBed[](#the-benefits-of-itero-testbed)
---------------------------------------------------------------

Itero TestBed is a game-changer for browser extension developers. It offers a multitude of benefits such as:

*   No need to drag and drop zip files to test your extensions
*   No waiting for the browser store to approve your updates
*   Seamless integration with GitHub
*   One-click installation for beta testers
*   Automatic updates pushed out to testers

How to Get Started with Itero TestBed[](#how-to-get-started-with-itero-testbed)
-------------------------------------------------------------------------------

To get started with Itero TestBed, you'll need to create an account on [Itero (opens in a new tab)](https://itero.plasmo.com/). Once you've created your account, follow these simple steps:

### Prepare Your Extension's Zip Bundle[](#prepare-your-extensions-zip-bundle)

If you don't already have a zip file of your extension, don't worry! You can easily generate one using the Plasmo Framework. Just follow these simple commands:

For more detailed instructions, check out the [documentation](https://docs.plasmo.com/framework/workflows/build#generating-a-zip-bundle) on the build pipeline.

### Upload Your Browser Extension's Zip File on Itero[](#upload-your-browser-extensions-zip-file-on-itero)

Take the zip file that you created in the previous step and upload it to Itero. You can do this by going to the [TestBed (opens in a new tab)](https://itero.plasmo.com/) page and clicking the "Upload New Extension" button.

### Share Your Extension's Link with Your Beta Testers[](#share-your-extensions-link-with-your-beta-testers)

Once you've uploaded your extension, share the generated link with your beta testers. They'll need to install Plasmo's software, but after that, they can install your extension with a single click. As you make changes, the updates will automatically be pushed out to them.

To get the Extension's Link, open the drop-down item for your Itero extension, then click Install Page:

Share that URL with your tester. If you would like the extension to be accessible to just your team, switch its access to "Private."

GitHub Integration[](#github-integration)
-----------------------------------------

If you're using GitHub to manage your code, Itero TestBed can be integrated with it. This allows you to automatically deploy your browser extensions to Itero TestBed when you push to your GitHub repository. Visit the [GitHub Builder page](https://docs.plasmo.com/itero/builder) page for more information.

Itero TestBed is an excellent solution for browser extension developers who want to streamline their testing process. With seamless integration, one-click installation, and automatic updates, your beta testing process will be more efficient.

[Getting Started](https://docs.plasmo.com/itero "Getting Started")[Team](https://docs.plasmo.com/itero/team "Team")</content>
</page>

<page>
  <title>Team – Plasmo</title>
  <url>https://docs.plasmo.com/itero/team</url>
  <content>You can create a team to collaborate with your team members on your extensions.

Create a New Team[](#create-a-new-team)
---------------------------------------

To create a new team, click on your email address on the top left, and select "Create Team".

Invite Team Members[](#invite-team-members)
-------------------------------------------

To invite a new team member, go to the team settings page by clicking the Settings button in your extension dashboard:

In the team settings page, add the email address of the person you want to invite and click on the "Add" button.

1.  Visit `https://itero.plasmo.com/team/<TEAM_NAME>/settings`
2.  Enter the email of your team member, and press "Add".

Join a Team[](#join-a-team)
---------------------------

To join a team, you need to be invited by the team owner or team admins. Once you receive an invitation, click on the "Join Team" button in the dashboard.

This will take you to the team settings page where you can accept the invitation.

Changing Member's Role[](#changing-members-role)
------------------------------------------------

To change a team member's role, go to the team settings page and click on the "Edit" button next to the member's name.

[TestBed](https://docs.plasmo.com/itero/test-bed "TestBed")[GitHub Extension Builder](https://docs.plasmo.com/itero/builder "GitHub Extension Builder")</content>
</page>

<page>
  <title>GitHub Extension Builder – Plasmo</title>
  <url>https://docs.plasmo.com/itero/builder</url>
  <content>Build your extension on every push to GitHub, and automatically deploy it to all your beta testers.

Getting Started[](#getting-started)
-----------------------------------

### Upload a new extension on your [Itero (opens in a new tab)](https://itero.plasmo.com/) account[](#upload-a-new-extension-on-your-itero-account)

If you already have an extension on Itero, you can skip this step. For more information on how to upload an extension, check out the [TestBed page](https://docs.plasmo.com/itero/test-bed).

### Link your GitHub organization to Itero[](#link-your-github-organization-to-itero)

Once you have your extension on Itero, you need to link your GitHub organization to Itero. This is done by installing the GitHub App on your organization, selecting the repositories that you'd like Builder to have access to, and then linking your organization and repository name on your extension's settings page.

#### Install the GitHub App[](#install-the-github-app)

To install the GitHub App on your organization, go to your team settings page and click "Install GitHub App". Then, follow the instructions to install the app on your organization, and select the repositories that you'd like Builder to have access to.

#### Giving Access to the Organization[](#giving-access-to-the-organization)

Select the organization that you'd like Builder to have access to. This will either be your personal GitHub account, or the organization that you're a part of.

#### Giving Access to the Repositories[](#giving-access-to-the-repositories)

Select the repositories that you'd like Builder to have access to. You can select all repositories, or select specific repositories. Remember, this doesn't link your extension to the repository, it just gives Builder access. You'll still need to link your extension to the repository on your extension's settings page.

#### Linking your Extension to GitHub[](#linking-your-extension-to-github)

After you've installed the GitHub App and given it access to your repositories, you need to link your organization and repository name on your extension's settings page. This is done by adding your organization and repository name to the settings page and clicking "Link".

Build History and Logs[](#build-history-and-logs)
-------------------------------------------------

Once you've linked your extension to GitHub, you can view the build history and logs for your extension.

#### Click the Builds tab on your extension's dashboard page[](#click-the-builds-tab-on-your-extensions-dashboard-page)

#### From here, you can view the build history and logs for your extension[](#from-here-you-can-view-the-build-history-and-logs-for-your-extension)

#### You can also view the status of each commit's build on GitHub[](#you-can-also-view-the-status-of-each-commits-build-on-github)

[Team](https://docs.plasmo.com/itero/team "Team")[Publisher](https://docs.plasmo.com/itero/publisher "Publisher")</content>
</page>

<page>
  <title>Publisher – Plasmo</title>
  <url>https://docs.plasmo.com/itero/publisher</url>
  <content>When you're ready to publish your extension to the Chrome Web Store, Firefox Add-ons Store, or Edge Add-ons Store, you can use Itero Publisher to automate the process.

Getting Started[](#getting-started)
-----------------------------------

Click on the "Publish" button on your extension's dashboard to get started.

Chrome Web Store[](#chrome-web-store)
-------------------------------------

Add your `clientId`, `clientSecret`, and `refreshToken`, and `extensionId` to the form. You can get these from Google Cloud Platform.

Visit [the Google Console (opens in a new tab)](https://console.developers.google.com/apis/credentials) and create a new project:

Enter `chrome-webstore-upload` and click **Create Project**

Visit the [Google Cloud Consent Portal (opens in a new tab)](https://console.cloud.google.com/apis/credentials/consent), select **External** and **Create**

Only enter the application name (e.g. `chrome-webstore-upload`) and required email fields, and click **Save**

Add your email address to the Test users

Visit the [Chrome Web Store API page (opens in a new tab)](https://console.developers.google.com/apis/library/chromewebstore.googleapis.com) and click **Enable**

Visit [the Google API Credentials page (opens in a new tab)](https://console.developers.google.com/apis/credentials) and click **Create credentials** > **OAuth Client ID**

Select **Desktop app**, enter `Chrome Webstore Upload`, and click **Create**

Download the OAuth client JSON key, save it into a `key.json` file:

Go back to the [Google Cloud Consent page (opens in a new tab)](https://console.cloud.google.com/apis/credentials/consent) page, and click **PUBLISH APP** to confirm

Open a console/terminal where you stored your `key.json` file. Run the following, replacing `pnpm dlx` with `npx` or `yarn dlx` as needed:

The command will open an OAuth consent screen on the web. Follow its steps and warnings (this is your personal app). Make sure the local `port` is correct.

Now you should have ✅ `clientId`, ✅ `clientSecret` and ✅ `refreshToken` in `key.json`.

Enter these values into the form on Itero Publisher, along with the extension ID that you can find on the [Chrome Web Store Developer Dashboard (opens in a new tab)](https://chrome.google.com/webstore/devconsole).

Edge Add-ons Store[](#edge-add-ons-store)
-----------------------------------------

Create an Edge add-on and go to the dashboard. You should see your product ID in the URL. It will look something like this: `https://partner.microsoft.com/en-us/dashboard/microsoftedge/{product-id}/package/dashboard`

You can get the `clientId`, `clientSecret`, and `accessTokenUrl` from the [Microsoft Edge Publish API page (opens in a new tab)](https://partner.microsoft.com/en-us/dashboard/microsoftedge/publishapi).

Firefox Add-ons Store[](#firefox-add-ons-store)
-----------------------------------------------

You can get your Extension UUID from the Firefox Add-ons hub: (Make sure to change the URL to match your extension's name): `https://addons.mozilla.org/en-US/developers/addon/%7B{ext-name}%7D/edit`

For the API Key and API Secret, you can get those from the [Firefox Add-ons Developer Hub's API page (opens in a new tab)](https://addons.mozilla.org/en-US/developers/addon/api/key/)

[GitHub Extension Builder](https://docs.plasmo.com/itero/builder "GitHub Extension Builder")[MV2 to MV3](https://docs.plasmo.com/itero/mv2-to-mv3 "MV2 to MV3")</content>
</page>

<page>
  <title>Manifest Version 2 to 3 Converter – Plasmo</title>
  <url>https://docs.plasmo.com/itero/mv2-to-mv3</url>
  <content>Converting your browser extension from Manifest V2 to Manifest V3 is a big task. With Itero's MV2-MV3 Converter, you can convert your extension to Manifest V3 with a single click. You can then use the TestBed to test your extension and make sure it works as expected.

Expand your extension on the Itero dashboard and click on MV2 to MV3.

You'll see an entire page dedicated to converting your extension.

Starter-tier users can only convert their manifest.json file. Pro-tier users can also have their code scanned!

If you haven't already, click "Run Code Scanning" to scan your code for any issues. This will help you identify any issues that you might have with your extension.

Manifest Converter[](#manifest-converter)
-----------------------------------------

Plasmo will look through your manifest.json file and let you know what you need to change in order to be MV3-ready. You can also click "Download MV3 Manifest" to download a manifest.json file that's ready for MV3.

Code Scanning[](#code-scanning)
-------------------------------

Pro users get the added benefit of having their code scanned. This will identify if your extension uses any MV2-only features that are not supported in MV3.

[Publisher](https://docs.plasmo.com/itero/publisher "Publisher")[GitHub Integration](https://docs.plasmo.com/itero/github "GitHub Integration")</content>
</page>

<page>
  <title>Itero GitHub Integration – Plasmo</title>
  <url>https://docs.plasmo.com/itero/github</url>
  <content>Itero integrates with GitHub to watch for changes in your extension repository and automatically builds and pushes your extension to Itero TestBed.

Prerequisites[](#prerequisites)
-------------------------------

*   You have uploaded an extension to Itero manually with a zip file
*   You must have an Itero account
*   You must have a GitHub account

Install the GitHub App[](#install-the-github-app)
-------------------------------------------------

1.  Visit the settings page of an extension in your Itero dashboard and click "Manage GitHub App."
2.  Press "Install GitHub App"
3.  Select the GitHub account that you want to use for the integration (ensure this account has access to the underlying extension repository)
4.  Press "Install"

Link GitHub Repository[](#link-github-repository)
-------------------------------------------------

1.  Visit the settings page of an extension in your Itero dashboard
2.  Enter the repository name in the form `<owner/repo>`
3.  Press "Link"

If the linked GitHub account has access to the repository, the repository will be linked. If the linked GitHub account does not have access to the repository, the process will error.

Once your repository is linked, an input field will appear that allows you to specify a custom branch to track. Specify the branch name and press "Track branch" if you would like to track a branch other than `main`.

Transitioning from Personal to Team[](#transitioning-from-personal-to-team)
---------------------------------------------------------------------------

The Itero GitHub integration is a 1-to-1 binding between an Itero "entity" and a GitHub "entity."

An entity can be a user or an organization.

If you are switching from the starter tier to a team tier, and you would like to integrate with the new Itero team, you must remove the current GitHub integration from your personal Itero account. To do so:

1.  Open the settings page of an extension in your personal Itero dashboard
2.  Click "Manage GitHub App"
3.  Press "Uninstall Plasmo Itero"

Then, open the settings page of an extension in your team Itero dashboard and follow the steps outlined in [the Install the GitHub App section](https://docs.plasmo.com/itero/github#install-the-github-app).

Aligning Itero Email and GitHub Email[](#aligning-itero-email-and-github-email)
-------------------------------------------------------------------------------

When adding a new user to your Itero team, sometime the new member might have a different email address on GitHub than on Itero. This causes issues with the GitHub integration because we use the email address on each platform to identify the user when they make a git commit.

To fix this, you may update the list of emails associated with your GitHub account. To do so:

1.  Visit [https://github.com/settings/emails (opens in a new tab)](https://github.com/settings/emails)
2.  Add the email address that you used to signup for Itero

[MV2 to MV3](https://docs.plasmo.com/itero/mv2-to-mv3 "MV2 to MV3")[Manual API](https://docs.plasmo.com/itero/api "Manual API")</content>
</page>

<page>
  <title>Manual Upload API – Plasmo</title>
  <url>https://docs.plasmo.com/itero/api</url>
  <content>If you would like to bring your own builder CI/CD pipeline instead of leveraging the [Itero's GitHub App](https://docs.plasmo.com/itero/github) integration, this page is for you! By manually submitting your zip file to Itero, your CI pipeline will not be limited by the number of seat licenses you have on Itero to trigger the cloud builder.

Download the API Key[](#download-the-api-key)
---------------------------------------------

Go to the settings page of your extension and download the API key. The key is a JSON file with the following shape:

Submission via GitHub Action[](#submission-via-github-action)
-------------------------------------------------------------

You may use the key with the [BPP](https://docs.plasmo.com/framework/workflows/submit) GitHub Action to automatically upload your extension to Itero. Simply add the `itero` key to your existing BPP's secret or as a separate secret workflow.

Make sure your BPP version is [v3.3.0 (opens in a new tab)](https://github.com/PlasmoHQ/bpp/releases/tag/v3.3.0) or above.

Submission via API Calls[](#submission-via-api-calls)
-----------------------------------------------------

First, create a zip file of your extension. Then, follow the flows below:

### 1\. POST `https://itero.plasmo.com/api/submit/upload`[](#1-post-httpsiteroplasmocomapisubmitupload)

This endpoint issues a signed URL for you to upload your extension to.

The request body must contain the `keys.itero` object, e.g:

The response is a JSON containing the upload url:

### 2\. PUT signed-upload-url[](#2-put-signed-upload-url)

Take the response url from step 1 and issue a PUT request to it with the zip blob. Ensure that the `Content-Type` header is `application/zip`

### 3\. POST `https://itero.plasmo.com/api/submit/sign`[](#3-post-httpsiteroplasmocomapisubmitsign)

After uploading is done, you will need to call the sign endpoint to finalize the process and update the extension bundle that will be served to the beta testers.

The request body must contain the `keys.itero` object like step 1.

[GitHub Integration](https://docs.plasmo.com/itero/github "GitHub Integration")[Quickstarts](https://docs.plasmo.com/quickstarts "Quickstarts")</content>
</page>

<page>
  <title>Table of Contents – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts</url>
  <content>Quickstarts

To see how easy it is to switch from any extension setup to Plasmo, see: [Migrate to Plasmo](https://docs.plasmo.com/quickstarts/migrate-to-plasmo).

We have many examples showcasing how to use Plasmo with:

*   [Next.js](https://docs.plasmo.com/quickstarts/with-nextjs)
*   [Stripe](https://docs.plasmo.com/quickstarts/with-stripe)
*   [Redux](https://docs.plasmo.com/quickstarts/with-redux)
*   [Tailwind CSS](https://docs.plasmo.com/quickstarts/with-tailwindcss)
*   [Firebase Authentication](https://docs.plasmo.com/quickstarts/with-firebase-authentication)
*   [Supabase Authentication](https://docs.plasmo.com/quickstarts/with-supabase)
*   [Google Analytics](https://docs.plasmo.com/quickstarts/with-google-analytics)
*   And many more: [visit the examples repository! (opens in a new tab)](https://github.com/PlasmoHQ/examples)

[Manual API](https://docs.plasmo.com/itero/api "Manual API")[Migrate to Plasmo](https://docs.plasmo.com/quickstarts/migrate-to-plasmo "Migrate to Plasmo")</content>
</page>

<page>
  <title>Quickstart with Next.js – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts/with-nextjs</url>
  <content>Plasmo seamlessly integrates with [Next.js (opens in a new tab)](https://nextjs.org/). The key idea is that Plasmo is your extension's entry point, and Next.js is your web application's entry point, allowing you to reuse your component across your codebase with minor adjustments.

List of compatibilities:

*   The TypeScript configuration exposed by Plasmo is compatible with Next.js, including the ability to use the `src` directory.
*   The [.env file](https://docs.plasmo.com/framework/env) is the same, but uses a different namespace (`PLASMO_PUBLIC` vs `NEXT_PUBLIC`)
*   Plasmo uses [Parcel 2 (opens in a new tab)](https://parceljs.org/) which uses [swc (opens in a new tab)](https://swc.rs/) underneath - the same bundler that Next.js uses. Thus, you can share plugin configs such as postcss and tailwindcss without modification.

See [with-nextjs (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-nextjs) for an example!

[Migrate to Plasmo](https://docs.plasmo.com/quickstarts/migrate-to-plasmo "Migrate to Plasmo")[Quickstart: Stripe](https://docs.plasmo.com/quickstarts/with-stripe "Quickstart: Stripe")</content>
</page>

<page>
  <title>Migrate to Plasmo Framework – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts/migrate-to-plasmo</url>
  <content>The Plasmo Browser Extension Framework simplifies building browser extensions with its declarative approach. It eliminates boilerplate code and provides a file-based configuration system that is easy to understand, use and [opt out of](https://docs.plasmo.com/quickstarts/migrate-to-plasmo#opting-out).

In this guide, we will walk you through transitioning from any extension project to Plasmo and highlight some key changes you need to make.

Install Plasmo CLI[](#install-plasmo-cli)
-----------------------------------------

The Plasmo framework's main driver is the Plasmo CLI. It is a Node.js package that contains a compiler, a bundler, a development server, and a packager tailor-made for browser extensions:

To start the development server, run `plasmo dev`. To build the extension, run `plasmo build`. To package the extension, run `plasmo package`.

manifest.json[](#manifestjson)
------------------------------

Plasmo merges `manifest.json` into the `package.json` and abstracts away the most basic properties:

Plasmo centralizes common metadata between `package.json` and `manifest.json` and resolves any static file references (such as action, background, content scripts, and so on) automatically.

This enables you to focus on the metadata that matters, such as name, description, OAuth, declarative\_net\_request, and so on.

Furthermore, it enables the framework to provide even more powerful features, such as:

*   [Using environment variables in the manifest](https://docs.plasmo.com/framework/env#in-manifest-overrides)
*   [`node_modules` resolving for web-accessible resources](https://docs.plasmo.com/framework/assets#assets-from-node_modules)
*   [Targeting multiple browsers, manifest versions, and environments (dev, prod, staging, etc...)](https://docs.plasmo.com/framework/workflows/build#with-a-specific-target)

Popup, Options, New tab Pages[](#popup-options-new-tab-pages)
-------------------------------------------------------------

Plasmo removes the need to manually mount your React/Svelte/Vue components.

In a non-Plasmo extension project, to mount a React component, you'd create an `index.html` template and associated JavaScript code:

If you wanted to add TypeScript, LESS, or SCSS, you would need to use Webpack, Parcel, or ESBuild, with extra plugins and loader setups.

With the Plasmo framework, it's much simpler. Add a `popup.tsx` or `options.tsx` file in [the source code directory](https://docs.plasmo.com/framework/customization/src), exporting a default React component.

Plasmo will take care of the rest:

Plasmo has built-in support for CSS, SCSS, LESS, CSS Modules, and PostCSS plugins.

If you'd like to, for example, use SCSS, you can simply import the SCSS file in your React component:

You can mount a React component this way for the options page, new tab page, [sandbox pages](https://docs.plasmo.com/framework/sandbox-pages), and any other [custom page](https://docs.plasmo.com/quickstarts/migrate-to-plasmo#custom-pages).

Custom Pages[](#custom-pages)
-----------------------------

In non-Plasmo extension projects, creating custom pages typically requires additional HTML templates and associated JavaScript code:

With Plasmo, you can use the built-in tab pages feature to create custom pages easily. Add a **`tabs`** folder in [you source code directory](https://docs.plasmo.com/framework/customization/src), and add your custom pages there, using `.tsx` files:

The page will be available at `chrome-extension://<extension-id>/tabs/custom.html`.

Content Scripts[](#content-scripts)
-----------------------------------

In non-Plasmo extension projects, you'd specify your content scripts in the `manifest.json` file and write them in JavaScript:

With Plasmo, your can specify your content script and its respective config in a file called `content.ts`, or inside a directory called `contents` - More on that later!

Here's what the `content.ts` file would look like:

No more moving back and forth between your `manifest.json` and `content.js` files. An added benefit is that the config is fully typed and thus can provide valuable auto-completion from your IDE.

To add multiple content scripts, create a directory called `contents` and repeat the above steps. You can name your scripts whatever you'd like in this directory. They will all get added as content scripts with their own configs.

For example, let's say you want to add a content script that changes the background color of the page to green. You can do so by creating a file called `emerald-splash.ts` in the `contents` directory:

Since the content script file didn't export a config, Plasmo will use the default config:

Content Scripts UI[](#content-scripts-ui)
-----------------------------------------

If you're injecting a React component into a web page, your extension likely has a lot of boilerplate code, creating Shadow DOMs, finding the right element to mount to, MutationObservers, and more.

We've abstracted all of this out so you can focus on building your component and not worry about the rest.

For example, let's say you want to inject a React component of a simple button into a web page. You can do so by creating a file called `press-me.tsx` in the `contents` directory:

Plasmo will automatically inject this component into the page, and mount it to the root element of the page.

What if you want to inject the component into a specific element? You can do so by exporting a getInlineAnchor function from the file:

By returning an Element, Plasmo will mount the component adjacent to that element. You can completely customize the mounting behavior, how the component renders, and more.

This feature is called [Content Scripts UI](https://docs.plasmo.com/framework/content-scripts-ui). To learn more about its API and how it works, check out the technical documentation on [its lifecycle](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle).

You can also specify the component's insert position relative to the element you're mounting it to:

Background Service Worker[](#background-service-worker)
-------------------------------------------------------

In non-Plasmo projects, creating a background service worker requires specifying the `background` property in the `manifest.json` file and writing the service worker code in JavaScript:

In Plasmo, you specify the background service worker by creating a `background.ts` file:

You can import any modules that target the standard service worker runtime into `background.ts`. For example, you can add the `bip39` module:

Plasmo will automatically bundle the `background.ts` file and add it as a background service worker to the `manifest.json` file.

Environment Variables[](#environment-variables)
-----------------------------------------------

If you're currently using environment variables, you can continue to do so in Plasmo.

The Plasmo framework supports [environment variables out of the box](https://docs.plasmo.com/framework/env) with no additional setup required.

Opting Out[](#opting-out)
-------------------------

The Plasmo framework's abstraction philosophy is to remove the most common configuration and boilerplate code. This enables developers to work under a higher abstraction layer -- their chosen UI library/framework, such as React, Vue, and Svelte. This is the path to creating more powerful and beautiful extensions.

Opting out of Plasmo is as easy as removing the `plasmo` dependency from your `package.json` file and taking your components out onto your custom setups. This is possible because all the glue code generated by Plasmo is injected at the framework compiler and bundler layer, making your feature code extremely portable.

You can also use Plasmo as much or as little as needed. All chrome APIs are available, and you can use them directly in your feature code. For example, instead of using the [messaging API](https://docs.plasmo.com/framework/messaging), you can use the `chrome.runtime.messaging` API directly. The same goes for content scripts and extension pages.

[Quickstarts](https://docs.plasmo.com/quickstarts "Quickstarts")[Quickstart: Next.js](https://docs.plasmo.com/quickstarts/with-nextjs "Quickstart: Next.js")</content>
</page>

<page>
  <title>Quickstart with Redux – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts/with-redux</url>
  <content>Easily integrate Redux to provide a simple way to manage state across your browser extension.

We forked [redux-persist (opens in a new tab)](https://github.com/plasmo-foss/redux-persist) which you can utilize along with [redux-persist-webextension-storage (opens in a new tab)](https://www.npmjs.com/package/redux-persist-webextension-storage) to persist your Redux state using `chrome.storage`.

⚠️

Support for Redux is provided by the open-source community at large. If it does not work, we welcome your contribution! For custom integration, we offer a consultation service. Please email `support@plasmo.com` for more detail.

Increment Example[](#increment-example)
---------------------------------------

Let's make a basic extension that increments and decrements a counter.

### Create Your Slice[](#create-your-slice)

counter-slice.ts

    import { createSlice } from "@reduxjs/toolkit"
     
    export interface CounterState {
      count: number
    }
     
    const counterSlice = createSlice({
      name: "counter",
      initialState: { count: 0 },
      reducers: {
        increment: (state) => {
          state.count += 1
        },
        decrement: (state) => {
          state.count -= 1
        }
      }
    })
     
    export const { increment, decrement } = counterSlice.actions
     
    export default counterSlice.reducer

### Create Your Store[](#create-your-store)

store.ts

    import { configureStore } from "@reduxjs/toolkit"
    import { localStorage } from "redux-persist-webextension-storage"
     
    import {
      FLUSH,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
      REHYDRATE,
      RESYNC,
      persistReducer,
      persistStore
    } from "@plasmohq/redux-persist"
    import { Storage } from "@plasmohq/storage"
     
    import counterSlice from "~counter-slice"
     
    const rootReducer = counterSlice
     
    const persistConfig = {
      key: "root",
      version: 1,
      storage: localStorage
    }
     
    const persistedReducer = persistReducer(persistConfig, rootReducer)
     
    export const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [
              FLUSH,
              REHYDRATE,
              PAUSE,
              PERSIST,
              PURGE,
              REGISTER,
              RESYNC
            ]
          }
        })
    })
    export const persistor = persistStore(store)
     
    // This is what makes Redux sync properly with multiple pages
    // Open your extension's options page and popup to see it in action
    new Storage().watch({
      [`persist:${persistConfig.key}`]: () => {
        persistor.resync()
      }
    })

The thing to note is the `new Storage().watch()` call. This will automatically resync the store whenever the Redux store changes in `chrome.storage`.

### Using in React[](#using-in-react)

options.tsx

    import { Provider } from "react-redux"
     
    import { PersistGate } from "@plasmohq/redux-persist/integration/react"
     
    import { CounterView } from "~counter"
    import { persistor, store } from "~store"
     
    function Options() {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CounterView />
          </PersistGate>
        </Provider>
      )
    }
     
    export default Options

Using the `PersistGate` will ensure the child components don't render until the store is ready.

### Using in a Background Service Worker[](#using-in-a-background-service-worker)

background.ts

    import { persistor, store } from "~store"
     
    persistor.subscribe(() => {
      console.log("State changed with: ", store?.getState())
    })

Full Example[](#full-example)
-----------------------------

See [with-redux (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-redux) for a complete example.

[Quickstart: Stripe](https://docs.plasmo.com/quickstarts/with-stripe "Quickstart: Stripe")[Quickstart: Tailwind CSS](https://docs.plasmo.com/quickstarts/with-tailwindcss "Quickstart: Tailwind CSS")</content>
</page>

<page>
  <title>Quickstart with Stripe – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts/with-stripe</url>
  <content>Intro[](#intro)
---------------

Stripe is a payment processing platform. Use cases include:

*   Monetizing access to expensive API calls
*   Monetizing premium extension feature
*   Selling themes, merch, physical and digital goods, etc.

Scenario[](#scenario)
---------------------

You are a SaaS company looking to offer a premium API service to your customer via an extension. You would like your users to pay $5/month before the extension can access this premium feature.

Setting Up a Stripe Product Link[](#setting-up-a-stripe-product-link)
---------------------------------------------------------------------

Due to [Manifest v3's restriction with remote code execution (opens in a new tab)](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code), there are limited options to have a PCI-compliant payment system integrated into an extension. The easiest way is to set up a Stripe Product Link.

To set up a Stripe Product Link, you must create a Stripe product. Head to [Stripe Product Dashboard (opens in a new tab)](https://dashboard.stripe.com/test/products?active=true) page, and press Add Product, then fill out the information:

Then, go to the product page and click the `Create payment link` button:

Above should get you the Stripe Payment Link. For backend authorization, head to the [Stripe Dashboard Home Page (opens in a new tab)](https://dashboard.stripe.com/test/dashboard) for the Secret Key:

Using env variable[](#using-env-variable)
-----------------------------------------

Assuming you have set up a basic Plasmo project, the first thing to do is to set up our [environment variables](https://docs.plasmo.com/framework/env):

To enable typescript IntelliSense, create an `index.d.ts` file:

[`.index.d.ts` (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-stripe/index.d.ts)

Accessing Chrome identity API[](#accessing-chrome-identity-api)
---------------------------------------------------------------

To associate a subscription with a user, we can use their email address. One quick way of doing so is to leverage the Chrome extension's [identity API (opens in a new tab)](https://developer.chrome.com/docs/extensions/reference/identity). To prevent unauthorized access, we will need to setup the OAuth2 authentication schema, which works as follow:

*   Our extension generates an OAuth2 access token
*   Extension sends request with the token to our backend
*   Backend validates the tokens to get the user's email address
*   Backend queries subscription status for the user

To enable the permission required for this feature, add the following to the `manifest` field of your `package.json` file:

Then, we will need to set up an OAuth2 client ID using Google Cloud Platform (GCP). Quickly create a new project in GCP following [this guide (opens in a new tab)](https://cloud.google.com/resource-manager/docs/creating-managing-projects), then navigate to the Credentials page: `https://console.cloud.google.com/apis/credentials?referrer=search&project=<YOUR_PROJECT_ID>`. It'll show you something like this:

Click `CREATE CREDENTIALS`, then select `OAuth client ID`:

On the next page, pick `Chrome app`. The form will then ask for an `Application ID`:

This will be your Extension ID - the next section is about how to obtain it.

### Set up fixed Extension ID for development[](#set-up-fixed-extension-id-for-development)

You will want to pin your extension ID for development. If you accidentally remove your development extension from your browser, the extension ID will be lost, and your OAuth2 client will be invalidated.

Since Chromium derives the extension ID from a public key, you can pin it by generating your own `key` instead. You can specify it in the [`manifest` override of your `package.json`](https://docs.plasmo.com/framework/customization/manifest). We can generate this key by following this [Stack Overflow answer (opens in a new tab)](https://stackoverflow.com/a/46739698):

1.  Generate the private key:

2.  Generate the public key from the private key above:

We can then use this key by leveraging [env variable in our manifest override](https://docs.plasmo.com/framework/env#in-manifest-overrides):

[Run the development server](https://docs.plasmo.com/framework/workflows/dev) then [load the extension into your browser](https://docs.plasmo.com/framework/workflows/dev#loading-the-extension). Then, copy the extension ID:

Paste the ID into the OAuth form's Application ID field, then submit. You will then receive your OAuth2 client ID:

Add it to your environment variables:

And use it in our manifest override:

We are now ready to generate an OAuth access token to authorize and process the user's subscription!

Accessing the user info[](#accessing-the-user-info)
---------------------------------------------------

We can use `chrome.identity.getProfileUserInfo` to know who our user is. To cache this data and reuse it across our app, we can create a quick [React context (opens in a new tab)](https://reactjs.org/docs/context.html). The easiest way is using [`puro` (opens in a new tab)](https://www.npmjs.com/package/puro) - Plasmo's context utility library. Install it by adding the library to your `package.json` file and run `pnpm i`:

Then, we can create our provider:

[`core/user-info.tsx` (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-stripe/core/user-info.tsx)

And use it in our popup:

[`popup.tsx` (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-stripe/popup.tsx)

Integrating the Stripe Link into the Popup page[](#integrating-the-stripe-link-into-the-popup-page)
---------------------------------------------------------------------------------------------------

To streamline the Stripe payment link with the identity API, we can pre-fill the email on the Stripe hosted form via [their API parameters (opens in a new tab)](https://stripe.com/docs/payments/payment-links#url-prefills) with the email obtained from the `UserInfoProvicer` above. Before we redirect our user to the Stripe payment, let's also invoke the OAuth flow to ensure the customer consents for us to use their email address. This will also initiate an access token cache for our extension, which allow future invocation to be non-interactive.

[`popup.tsx` (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-stripe/popup.tsx)

Verify the subscription and enable some premium features[](#verify-the-subscription-and-enable-some-premium-features)
---------------------------------------------------------------------------------------------------------------------

We will now set up our backend to verify the user's subscription. We can simplify this process by leveraging [NextJS interoperability with Plasmo](https://docs.plasmo.com/quickstarts/with-nextjs). We will first install NextJS and some utility libraries:

Once we've set up our dependencies, let's create some utility functions:

*   [`pages/api/_common.ts` (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-stripe/pages/api/_common.ts)

Then, we create our 2 API routes: one to check for the user's subscription and one to invoke the premium feature. Both API routes must first parse the authorization header for an access token, then use the token to fetch the user profile independently before using the profile's data to acquire the user's subscription.

*   [`pages/api/check-subscription.ts` (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-stripe/pages/api/check-subscription.ts)
*   [`pages/api/premium-feature.ts` (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-stripe/pages/api/premium-feature.ts)

To call the dev server from our extension, we can store the API URI using an environment variable and reference it in our manifest host:

Kill and re-run `pnpm dev` to start both the dev server for our backend and our extension. Before we call our API, let's set up more client-side helpers:

*   [core/access-token.ts (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-stripe/core/access-token.ts)
*   [core/premium-api.ts (opens in a new tab)](https://github.com/PlasmoHQ/examples/blob/main/with-stripe/core/premium-api.ts)

Now, we can use `swr` to call and revalidate the `check-subscription` API in our popup:

Then, to invoke our premium feature:

Full Example[](#full-example)
-----------------------------

For the complete example, check out [with-stripe (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-stripe) in the examples GitHub repository.

[Quickstart: Next.js](https://docs.plasmo.com/quickstarts/with-nextjs "Quickstart: Next.js")[Quickstart: Redux](https://docs.plasmo.com/quickstarts/with-redux "Quickstart: Redux")</content>
</page>

<page>
  <title>Quickstart with TailwindCSS – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts/with-tailwindcss</url>
  <content>Using Tailwind CSS is super easy with Plasmo thanks to the built-in integration with PostCSS. The setup is identical to the [official Tailwind CSS docs guide (opens in a new tab)](https://tailwindcss.com/docs/installation/using-postcss).

You can use any PostCSS plugins as well such as Autoprefixer, PurgeCSS, and more. This guide will walk you through the steps to get started with Tailwind CSS.

Example[](#example)
-------------------

*   To see a complete example of this quickstart, go to the [with-tailwindcss example (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-tailwindcss).

Create a Plasmo Project with TailwindCSS[](#create-a-plasmo-project-with-tailwindcss)
-------------------------------------------------------------------------------------

Manual Installation[](#manual-installation)
-------------------------------------------

If you already have a Plasmo extension project and would like to add TailwindCSS v3 manually, this section is for you!

### Add Dependencies[](#add-dependencies)

### Generate your tailwind.config.js file[](#generate-your-tailwindconfigjs-file)

### Defining Your PostCSS Config[](#defining-your-postcss-config)

### Setting up Tailwind config[](#setting-up-tailwind-config)

### Adding Root Styles[](#adding-root-styles)

Usage[](#usage)
---------------

### In Extension Pages[](#in-extension-pages)

Once you have all the configs in place, start using Tailwind within your React components! Below is an example of how to use Tailwind on the popup page:

### In Content Scripts UI[](#in-content-scripts-ui)

To use Tailwind in a [Content Scripts UI](https://docs.plasmo.com/csui), you will need to import the `style.css` file as text data, and expose it to the CSUI lifecycle via the `getStyle` method to inject the style into the CSUI shadowDOM:

[Quickstart: Redux](https://docs.plasmo.com/quickstarts/with-redux "Quickstart: Redux")[Quickstart: Supabase](https://docs.plasmo.com/quickstarts/with-supabase "Quickstart: Supabase")</content>
</page>

<page>
  <title>Quickstart with Supabase – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts/with-supabase</url>
  <content>Intro[](#intro)
---------------

Supabase is an open-source Firebase alternative.

This quickstart is a simple example showcasing how to use Supabase with Plasmo.

Prerequisites[](#prerequisites)
-------------------------------

*   [Supabase (opens in a new tab)](https://supabase.com/) Account
*   Supabase project

Initialize a Plasmo project with Supabase[](#initialize-a-plasmo-project-with-supabase)
---------------------------------------------------------------------------------------

Set up Environment Variables[](#set-up-environment-variables)
-------------------------------------------------------------

For Supabase to work, we'll need to define a URL and a KEY.

You can find these by finding them in your Supabase project dashboard:

Let's add them in an .env file:

Supabase Store[](#supabase-store)
---------------------------------

We need to initialize Supabase, so let's add a file called `core/supabase.ts`:

Adding Redirect URL[](#adding-redirect-url)
-------------------------------------------

When a user signs up, they'll need to confirm their email. To do this, we need to add a redirect URL to our Supabase project.

First, we need to create a consistent ID for our extension for development. When you push to the different web stores, you'll get a different ID. To learn more about how all of this works, check out our blog post on [creating consistent extension IDs (opens in a new tab)](https://www.plasmo.com/blog/posts/how-to-create-a-consistent-id-for-your-chrome-extension)

Go to the [Itero KeyPair Tool (opens in a new tab)](https://itero.plasmo.com/tools/generate-keypairs) to generate your consistent extension ID.

We can store the ID and public key in our `.env` file:

Then, references the public key in your package.json under the manifest.key value:

Now we need to make it so that the browser doesn't block access to our options page. To do this, we must add it to our web\_accessible\_resources in our manifest:

Head over to the Supabase console and click on the "Authentication" tab, and click URL Configuration.

Now add the following URL in your site URL as well as your redirect URL:

Replace `CRX_ID` with the generated extension ID given to you by Itero KeyPairs tool, or the actual ID given to you by the production web store.

Integrating with a React component[](#integrating-with-a-react-component)
-------------------------------------------------------------------------

Now we can write code in our React components utilizing Supabase!

Here's an example of using Supabase in a React component for the extension's options page.

Full Example[](#full-example)
-----------------------------

To see a complete example, check out [with-supabase (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-supabase) in our examples repo!

[Quickstart: Tailwind CSS](https://docs.plasmo.com/quickstarts/with-tailwindcss "Quickstart: Tailwind CSS")[Quickstart: Firebase Auth](https://docs.plasmo.com/quickstarts/with-firebase-authentication "Quickstart: Firebase Auth")</content>
</page>

<page>
  <title>Quickstart with Google Analytics – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts/with-google-analytics</url>
  <content>Since Manifest V3 does not support [remote code execution (opens in a new tab)](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code), it has been very difficult for developers to integrate Google Analytics into their extension project, especially with the latest [gtag4 version (opens in a new tab)](https://developers.google.com/analytics/devguides/collection/ga4).

To overcome this issue, Plasmo [bundles remote code at build time](https://docs.plasmo.com/framework/remote-code).

Obtaining the Tracking/Measurement ID[](#obtaining-the-trackingmeasurement-id)
------------------------------------------------------------------------------

You will first need to create a property to get the Tracking ID. During this process, Google will ask to provide a website URL - we suggest providing a subdomain of your domain. This ensures the data coming in is only from your properties - website/domain/extension.

Then, to get the Measurement ID, visit your Google Analytics dashboard, and navigate to the Tagging Instructions section (Admin -> Setup Assistant -> Tag installation -> Data Streams -> Web):

Click the button next to the Measurement ID, which should copy to your clipboard.

Env Variable Setup[](#env-variable-setup)
-----------------------------------------

To properly store the Measurement ID, we recommend using [environment variables](https://docs.plasmo.com/framework/env). Create an `.env.local` file:

To get TypeScript IntelliSense, create an `index.d.ts` file:

Using Google Analytics in a React component[](#using-google-analytics-in-a-react-component)
-------------------------------------------------------------------------------------------

Below is an example of how to implement the google tag tracking script in the popup page:

The import statement and the code inside the `useEffect` is identical to what Google gives you (see image below). We adapted them into the React lifecycle. We also add the `window` object to make it work with Typescript.

Full Example[](#full-example)
-----------------------------

To see a complete example, check out [with-google-analytics (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-google-analytics) in our examples repo.

[Quickstart: Firebase Auth](https://docs.plasmo.com/quickstarts/with-firebase-authentication "Quickstart: Firebase Auth")[Quickstart: Chrome Storage](https://docs.plasmo.com/quickstarts/with-chrome-storage "Quickstart: Chrome Storage")</content>
</page>

<page>
  <title>Quickstart with Firebase Auth – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts/with-firebase-authentication</url>
  <content>Since this is a bit more involved, we wrote [a blog post (opens in a new tab)](https://www.plasmo.com/blog/posts/firebase-chrome-extension) that goes into detail, step by step, on everything you need to do to get Firebase auth working.

For a quick start breakdown, read on:

Overview[](#overview)
---------------------

Auth in browser extensions can be a little bit of an adjustment for a web developer to think about but it's not much more difficult than using Firebase in React or Next.js directly.

We basically want to store our Tokens in Cookies so they can be used by Background Service Workers.

Setup[](#setup)
---------------

First, let's install some dependencies. Using Firebase and manipulating cookies in plasmo requires three packages.

*   firebase (clientside firebase SDK)
*   @plasmohq/messaging [See Messaging (opens in a new tab)](https://docs.plasmo.com/framework/messaging)
*   @plasmohq/storage [See Storage (opens in a new tab)](https://docs.plasmo.com/framework/storage)

or

or

Initialize Firebase[](#initialize-firebase)
-------------------------------------------

First we can create a singleton instance of our firebase clientside app.

Handling Tokens[](#handling-tokens)
-----------------------------------

Now that that's handled, we can create a re-usable hook to provide login and logout methods as well as an easy way to access user info on tabs / popup / options pages

You'll notice in the above snippet we're calling two background processes, removeAuth and saveAuth. Let's create those now

Example Usage Background SW[](#example-usage-background-sw)
-----------------------------------------------------------

Great, now you're saving your Refresh Token, ID Token and UID in cookies. You can use them in other background workers like this

In the above example we're refreshing our token if the response fails and retrying. Here's the utility method for refreshing the firebase token.

Example Usage React hook[](#example-usage-react-hook)
-----------------------------------------------------

You can also use this in a react component (either CSUI or tabs/extension pages)

Here's an example login page setup for options.tsx using TailwindCSS.

And a logout method might look like this

[Quickstart: Supabase](https://docs.plasmo.com/quickstarts/with-supabase "Quickstart: Supabase")[Quickstart: Google Analytics](https://docs.plasmo.com/quickstarts/with-google-analytics "Quickstart: Google Analytics")</content>
</page>

<page>
  <title>Quickstart with Chrome Storage – Plasmo</title>
  <url>https://docs.plasmo.com/quickstarts/with-chrome-storage</url>
  <content>Intro[](#intro)
---------------

Chrome storage is a powerful mechanism for persisting data in your extension. It's essential in MV3 where persistent background pages, which used to be the place developers stored persistent data, no longer exist.

Plasmo Storage[](#plasmo-storage)
---------------------------------

We built a [library](https://docs.plasmo.com/framework/storage) on top of the `chrome.storage` API that makes it much easier to use, especially if you're writing a React app.

Storage Hooks[](#storage-hooks)
-------------------------------

Our library provides React hooks for reading and writing to storage.

Here's some example usage:

Full Example[](#full-example)
-----------------------------

For the complete example, check out [with-storage (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-storage) in the examples GitHub repository.

[Quickstart: Google Analytics](https://docs.plasmo.com/quickstarts/with-google-analytics "Quickstart: Google Analytics")</content>
</page>

<page>
  <title>Content Scripts UI – Plasmo</title>
  <url>https://docs.plasmo.com/csui</url>
  <content>Plasmo has first-class support for mounting React, Svelte3, or Vue3 components into the current webpage. This feature is called content scripts UI (CSUI).

An extension can have as many CSUI as needed, with each CSUI targeting a group of webpages or a specific webpage by [exporting the config object](https://docs.plasmo.com/framework/content-scripts#config). To start injecting UI using React:

1.  Create a `content.tsx`
2.  Export a default React component
3.  Profit 🎉

See [with-content-scripts-ui (opens in a new tab)](https://github.com/PlasmoHQ/examples/tree/main/with-content-scripts-ui) for a full example.

### Config[](#config)

Content scripts UI are a subset of content scripts. Thus, you can [export a config object](https://docs.plasmo.com/framework/content-scripts#config) just as you would a regular Plasmo content script.

How does Plasmo CSUI work?[](#how-does-plasmo-csui-work)
--------------------------------------------------------

**TL;DR**: Plasmo creates a [Shadow DOM (opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) and mounts your exported component onto it. This isolation technique prevents the web page's style from affecting your component's styling and vice-versa.

For more details, please see the [Life Cycle of Plasmo CSUI](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle).

[Content Scripts](https://docs.plasmo.com/framework/content-scripts "Content Scripts")[Life Cycle](https://docs.plasmo.com/framework/content-scripts-ui/life-cycle "Life Cycle")</content>
</page>