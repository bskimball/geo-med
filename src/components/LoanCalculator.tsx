import React, { useState } from 'react';
import { Form, TextField, Label, Input } from 'react-aria-components';

const LoanCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(homePrice * 0.25);
  const [downPaymentManuallyChanged, setDownPaymentManuallyChanged] =
    useState(false);
  const [loanProgram, setLoanProgram] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);

  const loanAmount = homePrice - downPayment;
  const monthlyInterest = interestRate / 100 / 12;
  const numberOfPayments = loanProgram * 12;

  // Monthly payment formula
  const monthlyPayment =
    loanAmount > 0 && interestRate > 0
      ? (loanAmount * monthlyInterest) /
        (1 - Math.pow(1 + monthlyInterest, -numberOfPayments))
      : 0;

  // Update down payment to 25% of home price if not manually changed
  React.useEffect(() => {
    if (!downPaymentManuallyChanged) {
      setDownPayment(homePrice * 0.25);
    }
  }, [homePrice, downPaymentManuallyChanged]);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-base-content">
        Loan Calculator
      </h2>
      <Form className="space-y-4">
        {/* Home Price Field */}
        <TextField name="homePrice" className="w-full">
          <Label className="label">
            <span className="label-text font-medium">Home Price ($)</span>
          </Label>
          <Input
            type="number"
            className="input input-bordered rounded-lg w-full"
            value={homePrice}
            min={0}
            onChange={(e) => {
              setHomePrice(Number(e.target.value));
            }}
          />
        </TextField>

        {/* Down Payment Field */}
        <TextField name="downPayment" className="w-full">
          <Label className="label">
            <span className="label-text font-medium">Down Payment ($)</span>
          </Label>
          <Input
            type="number"
            className="input input-bordered rounded-lg w-full"
            value={downPayment}
            min={0}
            max={homePrice}
            onChange={(e) => {
              setDownPayment(Number(e.target.value));
              setDownPaymentManuallyChanged(true);
            }}
          />
        </TextField>

        {/* Loan Program Field */}
        <div className="w-full">
          <Label className="label">
            <span className="label-text font-medium">Loan Program</span>
          </Label>
          <select
            className="select select-bordered rounded-lg w-full"
            value={loanProgram}
            onChange={(e) => setLoanProgram(Number(e.target.value))}
          >
            <option value={15}>15 Year Fixed</option>
            <option value={30}>30 Year Fixed</option>
          </select>
        </div>

        {/* Interest Rate Field */}
        <TextField name="interestRate" className="w-full">
          <Label className="label">
            <span className="label-text font-medium">Interest Rate (%)</span>
          </Label>
          <Input
            type="number"
            className="input input-bordered rounded-lg w-full"
            value={interestRate}
            min={0}
            step={0.01}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </TextField>
      </Form>

      {/* Results Section */}
      <div className="mt-8 p-6 bg-base-200 rounded-lg">
        <div className="text-center">
          <div className="text-sm font-medium text-base-content/70 mb-2">
            Estimated Monthly Payment
          </div>
          <div className="text-3xl font-bold text-primary">
            $
            {monthlyPayment.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="mt-4 text-sm text-base-content/60">
            Loan Amount: ${loanAmount.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
