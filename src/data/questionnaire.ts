export const questionnaire = {
  questionnaire_id: "fef53505-2023-4be4-8dda-592a3d3f334c",
  title: "Asynchronous Intake",
  status: "active",
  created_at: "2021-12-10T17:40:40.471Z",
  questions: [
    {
      question_id: "f5c2086c-a401-4f66-ba04-ed7caa70ff29",
      title: "Question 1",
      description: "<p>This is the description of question 1</p>",
      type: "free_text",
      options: "",
      required: true,
      is_important: false,
      is_critical: false,
      is_current_medications: false,
      is_allergies: false,
      status: "active",
      created_at: "2021-12-10T17:40:40.784Z",
      questionnaire_id: "fef53505-2023-4be4-8dda-592a3d3f334c",
      order_number: 1,
      has_additional: false,
      additional_info: "",
      is_stop_intake: false,
      metadata: "",
    },
    {
      question_id: "c05a1096-8677-4d25-987c-703bce454f91",
      title: "Question 2",
      description: "<p>This is the description of question 2</p>",
      type: "multiple_choice",
      options: [
        {
          id: 1,
          name: "choice_1",
          type: "text",
          value: "Choice a",
          is_critical: true,
          is_important: false,
        },
        {
          id: 2,
          name: "choice_2",
          type: "text",
          value: "Choice b",
          is_critical: false,
          is_important: true,
        },
      ],
      required: true,
      is_important: false,
      is_critical: false,
      is_current_medications: false,
      is_allergies: false,
      status: "active",
      created_at: "2021-12-10T17:40:40.803Z",
      questionnaire_id: "fef53505-2023-4be4-8dda-592a3d3f334c",
      order_number: 2,
      has_additional: false,
      additional_info: "",
      is_stop_intake: false,
      metadata: "",
    },
    {
      question_id: "4393bb60-89eb-4938-be3e-57a5670172ce",
      title: "Upload",
      description: "<p>This is the description of question 4</p>",
      type: "file_upload",
      options: "",
      required: true,
      is_important: false,
      is_critical: false,
      is_current_medications: false,
      is_allergies: false,
      status: "active",
      created_at: "2021-12-10T17:40:40.970Z",
      questionnaire_id: "fef53505-2023-4be4-8dda-592a3d3f334c",
      order_number: 4,
      has_additional: false,
      additional_info: "",
      is_stop_intake: false,
      metadata: "",
    },
  ],
};