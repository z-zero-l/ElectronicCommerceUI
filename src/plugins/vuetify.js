import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import DayJsAdapter from "@date-io/dayjs";

const vuetify = createVuetify({
  ssr: true,
  date: {
    adapter: DayJsAdapter,
  },
});
