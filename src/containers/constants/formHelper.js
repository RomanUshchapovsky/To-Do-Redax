import * as Yup from 'yup';
import { MSG } from './messages';

export const FORM = {
  enableReinitialize: true,
  validateOnChange: true,
  validationSchema: Yup.object().shape({
      text: Yup.string().required(MSG.thisFieldIsRequired),
      // todo_completed_date:
      // image_url:
  }),
  initialValues: {
      text: "",
      todo_completed_date: new Date(),
      image_url: undefined,
      file: undefined
  }
}