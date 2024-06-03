import styles from './form.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormRegistration = ({ ownStyle, btnTitle }) => {
	let classNameStyle;

	switch (true) {
		case ownStyle === 'about_company__form':
			classNameStyle = styles.about_company__form;
			break;
		case ownStyle === 'quick_copy__form':
			classNameStyle = styles.quick_copy__form;
			break;
		case ownStyle === 'start_now__form':
			classNameStyle = styles.start_now__form;
			break;
	}

const SignupSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required field'),
});

	return (
		<Formik
			initialValues={{
				email: '',
			}}
			validationSchema={SignupSchema}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert('Success!');
					actions.resetForm();
					actions.setSubmitting(false);
				}, 1000);
			}}
		>
			{({ errors, touched, isSubmitting }) => (
				<Form noValidate className={classNameStyle}>
					<Field
						className={
							touched.email && errors.email ? `${styles.input} ${styles.input_border_error}` : styles.input
						}
						placeholder="Ваш e–mail"
						id="email"
						name="email"
						type="text"
					/>
					{errors.email && touched.email ? (
						<span className={styles.form__input_text_error}>{errors.email}</span>
					) : null}

					<button type="submit" className={`${styles.btn} button_common`}>
						<span className={styles.button_title}>{btnTitle}</span>
					</button>

					<div className={styles.form__preloader_wrapper}>
						{isSubmitting ? (
							<div className={styles.form__preloader}>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						) : (
							''
						)}
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default FormRegistration;
