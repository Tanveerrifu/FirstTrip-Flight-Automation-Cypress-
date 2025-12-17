# FirstTrip Flight Automation – Cypress

## Overview

This repository contains a **Cypress-based UI automation framework** for testing the flight search flow of the FirstTrip website. The framework is designed to be **simple, readable, and scalable**, following industry best practices.

---

## Tech Stack

* **Cypress (v10+)**
* **JavaScript**
* **Page Object Model (POM)**

---

## Test Scenario Covered

The automated test covers the following user journey:

1. Navigate to `https://firsttrip.com/flight`
2. Select **One Way** trip
3. Select **departure date as tomorrow** (dynamic date handling)
4. Click **Search**
5. Select the **first available flight**
6. Verify the **Sign In page** appears
7. Capture and print **all listed flight prices** into an array

---

---

## How to Run the Tests

### 1. Install dependencies

```bash
npm install
```

### 2. Open Cypress Test Runner

```bash
npx cypress open
```

### 3. Run tests in headless mode (optional)

```bash
npx cypress run
```

---

## Design Decisions & Reasoning

### Page Object Model (POM)

* Separates test logic from UI selectors
* Improves readability and maintainability
* Makes the framework scalable for future test cases

### Dynamic Date Selection

* Departure date is calculated at runtime (tomorrow)
* Avoids hard-coded dates and flaky tests

### Price Capture Logic

* All visible flight prices are collected dynamically
* Prices are stored in an array and printed for validation

### Handling Sign In Page

* After selecting a flight, the application navigates to a **full Sign In page**
* The Sign In page does **not provide a close (×) option**
* Cypress cannot close browser tabs or control multiple tabs

Because of this:

* The test **verifies the Sign In page appearance**
* The close Sign In action is **intentionally skipped**

This approach aligns with **Cypress limitations and real-world automation practices**.

---

## Key Points

* No hard-coded waits are used
* Stable selectors and dynamic logic are preferred
* Cypress limitations are handled gracefully

---

