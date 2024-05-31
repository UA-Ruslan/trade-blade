import styles from './form.module.scss';
const Form = ({ ownStyle, btnTitle }) => {

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


	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className={classNameStyle}>
			<input required className={styles.input} placeholder="Ваш e–mail" type="email" />
			<button onClick={handleSubmit} className={`${styles.btn} button_common`}>
				<span className={styles.button_title}>{btnTitle}</span>
			</button>
		</form>
	);
};

export default Form;
