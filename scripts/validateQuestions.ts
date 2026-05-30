import { TGAT1_QUESTIONS } from "../src/data/tgat1";
import { TGAT2_QUESTIONS } from "../src/data/tgat2";
import { TGAT3_QUESTIONS } from "../src/data/tgat3";

function validateExam(name: string, questions: any[]) {
  let errors = 0;
  console.log(`\n🔍 Validating ${name}...`);
  
  questions.forEach((q, idx) => {
    // 1. Check ID
    if (!q.id) {
      console.error(`❌ Question at index ${idx} missing ID`);
      errors++;
    }
    // 2. Check Options length
    if (!q.options || q.options.length !== 4) {
      console.error(`❌ Question ${q.id} must have exactly 4 options`);
      errors++;
    }
    // 3. Check Answer range
    if (q.answer < 0 || q.answer > 3) {
      console.error(`❌ Question ${q.id} answer index ${q.answer} out of bounds (must be 0-3)`);
      errors++;
    }
    // 4. Check Explanations
    if (!q.correctExplanation || !q.wrongExplanation) {
      console.error(`❌ Question ${q.id} missing explanations`);
      errors++;
    }
  });

  if (errors === 0) {
    console.log(`✅ ${name} passed validation (${questions.length} questions)`);
  } else {
    console.log(`⚠️ ${name} has ${errors} errors!`);
  }
  return errors;
}

function run() {
  let totalErrors = 0;
  totalErrors += validateExam("TGAT1", TGAT1_QUESTIONS);
  totalErrors += validateExam("TGAT2", TGAT2_QUESTIONS);
  totalErrors += validateExam("TGAT3", TGAT3_QUESTIONS);

  if (totalErrors > 0) {
    console.error(`\n🚨 Validation Failed with ${totalErrors} total errors.`);
    process.exit(1);
  } else {
    console.log(`\n🎉 All Question Banks Validated Successfully!`);
  }
}

run();
