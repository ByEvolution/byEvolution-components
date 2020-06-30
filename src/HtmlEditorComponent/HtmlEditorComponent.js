import ReactDOM from "react-dom";
import React, { Component } from "react";

import EditorJs from "react-editor-js";
import { Grid } from "@material-ui/core";

const HtmlEditorComponent = () => {
  return (
    <Grid container item>
      <EditorJs
        data={{
          time: 1556098174501,
          blocks: [
            {
              type: "header",
              data: {
                text: "Editor.js",
                level: 2,
              },
            },
            {
              type: "paragraph",
              data: {
                text:
                  "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
              },
            },
            {
              type: "header",
              data: {
                text: "Key features",
                level: 3,
              },
            },
            {
              type: "list",
              data: {
                style: "unordered",
                items: [
                  "It is a block-styled editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a simple API",
                ],
              },
            },
            {
              type: "header",
              data: {
                text: "What does it mean clean data output",
                level: 3,
              },
            },
            {
              type: "paragraph",
              data: {
                text:
                  "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
              },
            },
            {
              type: "paragraph",
              data: {
                text:
                  'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
              },
            },
            {
              type: "paragraph",
              data: {
                text:
                  "Clean data is useful to sanitize, validate and process on the backend.",
              },
            },
            {
              type: "delimiter",
              data: {},
            },
            {
              type: "paragraph",
              data: {
                text:
                  "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
              },
            },
            {
              type: "image",
              data: {
                file: {
                  url:
                    "data:image/jpeg;base64,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",
                },
                caption: "",
                withBorder: true,
                stretched: false,
                withBackground: false,
              },
            },
          ],
          version: "2.12.4",
        }}
      />
    </Grid>
  );
};

export default HtmlEditorComponent;
