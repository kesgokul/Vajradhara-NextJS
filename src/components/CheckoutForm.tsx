import styles from "./CheckoutForm.module.css";
import Link from "next/link";

import { indianStates } from "utils/helper-functions";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function CheckoutForm() {
  return (
    <main className={styles.formContainer}>
      <Formik
        initialValues={{
          email: "",
          name: "",
          door: "",
          street: "",
          city: "",
          state: "",
          postal: "",
          phone: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Please enter a valid email"),
          name: Yup.string().required("Please enter you full name"),
          door: Yup.string().required("Please enter Door No, Apartment, etc"),
          street: Yup.string().required("Please enter street, locality"),
          city: Yup.string().required("Please enter City, Town, etc"),
          state: Yup.string().required("Please enter State / Province"),
          postal: Yup.number().required("Please enter valid postal code"),
          phone: Yup.string().required("Please enter phone number"),
        })}
      >
        <Form className={styles.form}>
          <div className={styles.email}>
            <p className={styles.login}>
              Already have an account? <Link href="/">Log in</Link>
            </p>
            <Field
              className={styles.field}
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className={styles.error}>
              <ErrorMessage className={styles.error} name="email" />
            </div>
          </div>

          <div className={styles.shippingInfo}>
            <h2>Shipping Info </h2>
            <div className={styles.fieldContainerContainer}>
              <Field
                className={styles.field}
                placeholder="Full Name"
                type="text"
                name="name"
              />
              <div className={styles.error}>
                <ErrorMessage className={styles.error} name="name" />
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <Field
                className={styles.field}
                placeholder="Door, Apartment, suite, etc"
                type="text"
                name="door"
              />
              <div className={styles.error}>
                <ErrorMessage className={styles.error} name="door" />
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <Field
                className={styles.field}
                placeholder="Street, Area, locality"
                type="text"
                name="street"
              />
              <div className={styles.error}>
                <ErrorMessage className={styles.error} name="street" />
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <Field
                className={styles.field}
                placeholder="City, Town, Village"
                type="text"
                name="city"
              />
              <div className={styles.error}>
                <ErrorMessage className={styles.error} name="city" />
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <Field
                className={styles.field}
                type="text"
                as="select"
                placeholder="State"
                name="state"
              >
                <option className={styles.statePlaceholder} value="">
                  State
                </option>
                {indianStates.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </Field>
              <div className={styles.error}>
                <ErrorMessage className={styles.error} name="state" />
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <Field
                className={styles.field}
                placeholder="Postal code"
                type="string"
                name="postal"
              />
              <div className={styles.error}>
                <ErrorMessage className={styles.error} name="postal" />
              </div>
            </div>
            <div className={styles.fieldContainer}>
              <Field
                className={styles.field}
                placeholder="Phone number"
                type="string"
                name="phone"
              />
              <div className={styles.error}>
                <ErrorMessage className={styles.error} name="phone" />
              </div>
            </div>
          </div>
          <button className={styles.btnSubmit} type="submit">
            Continue to Payment
          </button>
        </Form>
      </Formik>
    </main>
  );
}
