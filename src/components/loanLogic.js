// loanLogic.js

// Constants
const INTEREST_RATE = 0.265; // 26.5%
const MONTHLY_PLAN_DURATION = 6; // 6 months
const WEEKLY_PLAN_DURATION = 23; // 23 weeks
const WEEKLY_GRACE_PERIOD = 1; // 1-week grace period

// Calculate total repayment amount
export const calculateTotalRepayment = (loanAmount, repaymentPlan) => {
  const interest = loanAmount * INTEREST_RATE;
  return loanAmount + interest;
};

// Calculate repayment schedule
export const calculateRepaymentSchedule = (loanAmount, repaymentPlan, startDate) => {
  const totalRepayment = calculateTotalRepayment(loanAmount, repaymentPlan);
  const schedule = [];

  if (repaymentPlan === "monthly") {
    for (let i = 1; i <= MONTHLY_PLAN_DURATION; i++) {
      const dueDate = new Date(startDate);
      dueDate.setMonth(dueDate.getMonth() + i);
      schedule.push({
        dueDate: dueDate.toLocaleDateString(),
        amount: (totalRepayment / MONTHLY_PLAN_DURATION).toFixed(2),
      });
    }
  } else if (repaymentPlan === "weekly") {
    for (let i = WEEKLY_GRACE_PERIOD; i <= WEEKLY_PLAN_DURATION; i++) {
      const dueDate = new Date(startDate);
      dueDate.setDate(dueDate.getDate() + i * 7);
      schedule.push({
        dueDate: dueDate.toLocaleDateString(),
        amount: (totalRepayment / (WEEKLY_PLAN_DURATION - WEEKLY_GRACE_PERIOD)).toFixed(2),
      });
    }
  }

  return schedule;
};

// Validate loan application form
export const validateLoanForm = (formData) => {
  const errors = {};

  if (!formData.loanAmount || formData.loanAmount <= 0) {
    errors.loanAmount = "Loan amount must be greater than 0.";
  }

  if (!formData.repaymentPlan) {
    errors.repaymentPlan = "Repayment plan is required.";
  }

  if (!formData.startDate) {
    errors.startDate = "Start date is required.";
  }

  return errors;
};