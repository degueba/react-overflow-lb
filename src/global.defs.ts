export type QuestionType = {
  label: string;
  question_id: string;
  title: string;
  description: string;
  type: string;
  options: string;
  required: boolean;
  is_important: boolean;
  is_critical: boolean;
  is_current_medications: boolean;
  is_allergies: boolean;
  status: string;
  created_at: string;
  questionnaire_id: string;
  order_number: number;
  has_additional: boolean;
  additional_info: string;
  is_stop_intake: boolean;
  metadata: string;
};
