"use strict";

/**
 * GOOGLE APIS — only the ones this agent actually calls.
 *
 * `googleapis` is the mega-bundle: every Google API Google publishes, about
 * 196 MB installed. This agent uses four of them. That weight is not a tidiness
 * problem — it is why builds were being killed out of memory in the simulator's
 * sandbox, and why a clone-and-install took long enough to look like a hang.
 *
 * The scoped packages are the same code, published per API, and together come
 * to a few megabytes. This re-exports them in the shape `googleapis` uses, so
 * every call site stays exactly as it was:
 *
 *   const { google } = require("./google-min");
 *   google.gmail({ version: "v1", auth })
 *   new google.auth.OAuth2(id, secret, redirect)
 *
 * google.auth.OAuth2 is OAuth2Client from google-auth-library — literally what
 * googleapis re-exports under that name.
 *
 * Adding another Google API means adding its scoped package here, not
 * reinstating the bundle.
 */

const { OAuth2Client } = require("google-auth-library");
const { gmail } = require("@googleapis/gmail");
const { calendar } = require("@googleapis/calendar");
const { people } = require("@googleapis/people");

const google = {
  auth: { OAuth2: OAuth2Client },
  gmail,
  calendar,
  people,
};

module.exports = { google };
