import App from "./src/configs/app.config";
import { createModels } from "./src/configs/sequelize.config";
import { uploadData } from "./src/data/main.data";

const reset: boolean = false;

async function runProcess() {
  const app = new App();
  app.run();
  // Upload Data for Dev Mode
  await createModels(reset);

  if (reset === true) {
    await uploadData(); 
  }
}

runProcess();

