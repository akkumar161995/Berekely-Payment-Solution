/// <reference types="Cypress" />

describe("Create Card Holder endpoint ", () => {
  let invalidAccessToken =
    "3Jkbm4cYE5ZA1OR7VyDFMINziHL2WTu0o9KhUSsepP8gQrjXBG8";

  it("Create Card Holder Api- Positive TestCase1", () => {
    cy.api({
      method: "POST",
      url: "/api/v1/card_issuing/cardholders",
      headers: {
        Authorization: "Bearer " + Cypress.env("accessToken"),
        Accept: "application/json",
      },
      body: {
        program_id: 31,
        external_tag: "abc123",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "01-01-1980",
        email: "user@fakedomain.com",
        phone: "1231231234",
        postal_code: "84121",
        city: "Moonbase One",
        state: "UT",
        address1: "123 Fake Street",
        address2: "apartment 2",
        country: "840",
        sin: "",
        shipping_method: "1",
        load_amount: 100,
      },
    }).then(function (response) {
      expect(response.body.data.company_id).to.be.a("string");
      expect(response.body.data.created_at).to.be.a("string");
      expect(response.body.data.external_tag).to.be.a("string");
      expect(response.body.data.id).to.be.to.be.an("number");
      expect(response.body.data.primary_processor_reference).to.be.a("string");
      expect(response.body.data.username).to.be.equal(null);
      expect(response.body.data.value_load_result.code).to.be.equal("success");
      expect(response.body.data.value_load_result.message).to.be.a("string");
    });
  });

  it("Create Card Holder Api- Positive TestCase2", () => {
    cy.api({
      method: "POST",
      url: "/api/v1/card_issuing/cardholders",
      headers: {
        Authorization: "Bearer " + Cypress.env("accessToken"),
        Accept: "application/json",
      },
      body: {
        program_id: 31,
        external_tag: "abc123",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "01-01-1980",
        email: "user@fakedomain.com",
        phone: "1231231234",
        postal_code: "84121",
        city: "Moonbase One",
        state: "UT",
        address1: "123 Fake Street",
        address2: "apartment 2",
        country: "840",
        sin: "987654321",
        shipping_method: "1",
        load_amount: 100,
      },
    }).then(function (response) {
      expect(response.body.data.company_id).to.be.a("string");
      expect(response.body.data.created_at).to.be.a("string");
      expect(response.body.data.external_tag).to.be.a("string");
      expect(response.body.data.id).to.be.to.be.an("number");
      expect(response.body.data.primary_processor_reference).to.be.a("string");
      expect(response.body.data.username).to.be.equal(null);
      expect(response.body.data.value_load_result.code).to.be.equal("success");
      expect(response.body.data.value_load_result.message).to.be.a("string");
    });
  });

  it("Create Card Holder Api-Wrong Authorization Token- Negative TestCase", () => {
    cy.api({
      method: "POST",
      url: "/api/v1/card_issuing/cardholders",
      headers: {
        Authorization: "Bearer " + invalidAccessToken,
        Accept: "application/json",
      },
      body: {
        program_id: 31,
        external_tag: "abc123",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "01-01-1980",
        email: "user@fakedomain.com",
        phone: "1231231234",
        postal_code: "84121",
        city: "Moonbase One",
        state: "UT",
        address1: "123 Fake Street",
        address2: "apartment 2",
        country: "840",
        sin: "",
        shipping_method: "1",
        load_amount: 100,
      },
      failOnStatusCode: false,
    }).then(function (response) {
      expect(response.body.error.code).to.be.equal(
        "invalid_credentials_supplied"
      );
      expect(response.body.error.message).to.be.equal(
        "Invalid credentials supplied"
      );
    });
  });

  it("Create Card Holder Api-Wrong URL- Negative TestCase", () => {
    cy.api({
      method: "POST",
      url: "/api/v1/card_issuing/cardholders01",
      headers: {
        Authorization: "Bearer " + Cypress.env("accessToken"),
        Accept: "application/json",
      },
      body: {
        program_id: 31,
        external_tag: "abc123",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "01-01-1980",
        email: "user@fakedomain.com",
        phone: "1231231234",
        postal_code: "84121",
        city: "Moonbase One",
        state: "UT",
        address1: "123 Fake Street",
        address2: "apartment 2",
        country: "840",
        sin: "",
        shipping_method: "1",
        load_amount: 100,
      },
      failOnStatusCode: false,
    }).then(function (response) {
      expect(response.body.error.code).to.be.equal("url_invalid");
      expect(response.body.error.message).to.be.equal("Url is Invalid");
    });
  });
  it("Create Card Holder Api-Wrong Content Type- Negative TestCase", () => {
    cy.api({
      method: "POST",
      url: "/api/v1/card_issuing/cardholders",
      headers: {
        Authorization: "Bearer " + Cypress.env("accessToken"),
        Accept: "content/html",
      },
      body: {
        program_id: 31,
        external_tag: "abc123",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "01-01-1980",
        email: "user@fakedomain.com",
        phone: "1231231234",
        postal_code: "84121",
        city: "Moonbase One",
        state: "UT",
        address1: "123 Fake Street",
        address2: "apartment 2",
        country: "840",
        sin: "",
        shipping_method: "1",
        load_amount: 100,
      },
      failOnStatusCode: false,
    }).then(function (response) {
      expect(response.body).to.equal(undefined);
    });
  });
  it("Create Card Holder Api-Wrong state in Body- Negative TestCase", () => {
    cy.api({
      method: "POST",
      url: "/api/v1/card_issuing/cardholders",
      headers: {
        Authorization: "Bearer " + Cypress.env("accessToken"),
        Accept: "application/json",
      },
      body: {
        program_id: 31,
        external_tag: "abc123",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "01-01-1980",
        email: "user@fakedomain.com",
        phone: "1231231234",
        postal_code: "84121",
        city: "Moonbase One",
        state: "UTE",
        address1: "123 Fake Street",
        address2: "apartment 2",
        country: "840",
        sin: "",
        shipping_method: "1",
        load_amount: 100,
      },
      failOnStatusCode: false,
    }).then(function (response) {
      expect(response.body.error.code).to.be.equal("invalid_cardholder");
      expect(response.body.error.field_errors[0].code).to.be.equal(
        "valid_state"
      );
      expect(response.body.error.field_errors[0].message).to.be.equal(
        "Not a valid state or province"
      );
      expect(response.body.error.field_errors[0].value).to.be.equal("UTE");
      expect(response.body.error.field_errors[0].position).to.be.an("array");
      expect(response.body.error.field_errors[0].position[0]).to.be.equal(
        "state"
      );
      expect(response.body.error.message).to.be.equal(
        "Invalid field(s) in Cardholder Object"
      );
    });
  });
  it("Create Card Holder Api- Load Amount Less Than 0.100- Negative TestCase", () => {
    cy.api({
      method: "POST",
      url: "/api/v1/card_issuing/cardholders",
      headers: {
        Authorization: "Bearer " + Cypress.env("accessToken"),
        Accept: "application/json",
      },
      body: {
        program_id: 31,
        external_tag: "abc123",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "01-01-1980",
        email: "user@fakedomain.com",
        phone: "1231231234",
        postal_code: "84121",
        city: "Moonbase One",
        state: "UT",
        address1: "123 Fake Street",
        address2: "apartment 2",
        country: "840",
        sin: "",
        shipping_method: "1",
        load_amount: 0.99,
      },
      failOnStatusCode: false,
    }).then(function (response) {
      expect(response.body.error.message).to.be.equal(
        "Load_amount: is invalid"
      );
    });
  });
  it("Create Card Holder Api- Change Date of Birth Format - Negative TestCase", () => {
    cy.api({
      method: "POST",
      url: "/api/v1/card_issuing/cardholders",
      headers: {
        Authorization: "Bearer " + Cypress.env("accessToken"),
        Accept: "application/json",
      },
      body: {
        program_id: 31,
        external_tag: "abc123",
        first_name: "John",
        last_name: "Doe",
        date_of_birth: "1980-01-01",
        email: "user@fakedomain.com",
        phone: "1231231234",
        postal_code: "84121",
        city: "Moonbase One",
        state: "UT",
        address1: "123 Fake Street",
        address2: "apartment 2",
        country: "840",
        sin: "",
        shipping_method: "1",
        load_amount: 100,
      },
      failOnStatusCode: false,
    }).then(function (response) {
      expect(response.body.error.code).to.be.equal("invalid_cardholder");
      expect(response.body.error.field_errors[0].code).to.be.equal(
        "valid_date_of_birth"
      );
      expect(response.body.error.field_errors[0].message).to.be.equal(
        "Date must be in the format dd-MM-yyyy"
      );
      expect(response.body.error.field_errors[0].value).to.be.equal(
        "1980-01-01"
      );
      expect(response.body.error.field_errors[0].position).to.be.an("array");
      expect(response.body.error.field_errors[0].position[0]).to.be.equal(
        "date_of_birth"
      );

      expect(response.body.error.message).to.be.equal(
        "Invalid field(s) in Cardholder Object"
      );
    });
  });
});
