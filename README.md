# SFCC Storefront Basic Auth Autofill

A lightweight Chrome extension that automatically supplies HTTP Basic Authentication credentials for authorized Salesforce Commerce Cloud (SFCC) SIG sandbox storefronts.

> **⚠️ LOCAL SIG SANDBOX USE ONLY**
>
> Install locally using Chrome's **Load unpacked** feature. Do not use with staging, UAT, or production environments. Never commit actual credentials to GitHub.

## How It Works

Uses Chrome's `webRequest.onAuthRequired` API to respond to HTTP Basic Authentication challenges, avoiding repeated manual credential entry when accessing configured SIG sandboxes.

## Configuration

1. Update the URL patterns in `background.js` and `manifest.json` to match your authorized SIG sandbox domains.
2. Configure your local Basic Auth credentials in `background.js`.
3. Keep actual credentials out of version control.

To add more domains, add their URL patterns to both `background.js` and `manifest.json` under `host_permissions`.

## Local Installation

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the extension folder.
4. Open the extension's **Details** page.
5. Enable **Allow in Incognito**.

Once enabled, the extension can automatically handle authentication challenges in Incognito windows, so you don't have to manually enter your credentials each time you open a new Incognito window.

**Note:** Reload the extension after changing its configuration. Use only with authorized local SIG sandboxes.