# Ansuz SSO UI

Install:

```bash
// npm
npm i -S @ansuzdev/sso-ui

// yarn
yarn add @ansuzdev/sso-ui
```

This package defines 3 forms for Ansuz SSO: login, register and forgot password
those are used in React app.

__Note__: `appId` from SSO is required to initialize each form.

## Login form

```javascript
import {LoginForm} from "@ansuzdev/sso-ui";

<LoginForm appId="[ENTER_APP_ID]" />
```

All properties:

|Name | Type | Required | Default | Description |
|-------|------|:-----:|:-----:|----|
|appId|string|x||SSO app ID|
|showRegister|boolean| |true|Show register link|
|showForgotPassword|boolean| |true|Show forgot password link|
|onLogin|func| |null|On login callback|
|onRegister|func| |null|On register callback|
|onForgotPassword|func| |null|On forgot password callback|

## Register form

Beside `appId`, you need to put `baseUrl` (where to call register API) to setup
register form.

```javascript
import {RegisterForm} from "@ansuzdev/sso-ui";

<RegisterForm
  baseUrl="[REGISTER_API_URL]"
  appId="[ENTER_APP_ID]"
/>
```

All properties:

|Name | Type | Required | Default | Description |
|-------|------|:-----:|:-----:|----|
|appId|string|x||SSO app ID|
|baseUrl|string|x||URL to register api|
|showLogin|boolean| |true|Show login link|
|showForgotPassword|boolean| |true|Show forgot password link|
|onLogin|func| |null|On login callback|
|onRegister|func| |null|On register callback|
|onForgotPassword|func| |null|On forgot password callback|

## Forgot password form

```javascript
import {ForgotPasswordForm} from "@ansuzdev/sso-ui";

<ForgotPasswordForm appId="[ENTER_APP_ID]" />
```

All properties:

|Name | Type | Required | Default | Description |
|-------|------|:-----:|:-----:|----|
|appId|string|x||SSO app ID|
|showLogin|boolean| |true|Show login link|
|showRegister|boolean| |true|Show register link|
|onLogin|func| |null|On login callback|
|onRegister|func| |null|On register callback|
|onForgotPassword|func| |null|On forgot password callback|
