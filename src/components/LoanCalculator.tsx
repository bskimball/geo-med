import React, { useState } from 'react';
import {
  Form,
  TextField,
  Label,
  Input,
  Button,
  FieldError,
  Select,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
} from 'react-aria-components';

const LoanCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState(450000);
  const [loanType, setLoanType] = useState<'conventional' | 'va' | 'fha'>(
    'conventional'
  );
  const [downPayment, setDownPayment] = useState(homePrice * 0.2);
  const [downPaymentManuallyChanged, setDownPaymentManuallyChanged] =
    useState(false);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);

  // Update defaults when loan type changes
  React.useEffect(() => {
    if (!downPaymentManuallyChanged) {
      if (loanType === 'va') {
        setDownPayment(0);
      } else if (loanType === 'fha') {
        setDownPayment(homePrice * 0.035);
      } else {
        setDownPayment(homePrice * 0.2);
      }
    }
  }, [loanType, homePrice, downPaymentManuallyChanged]);

  const loanAmount = homePrice - downPayment;
  const monthlyInterest = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  // Monthly payment formula
  const monthlyPayment =
    loanAmount > 0 && interestRate > 0
      ? (loanAmount * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numberOfPayments))
      : 0;

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-2">
          Mortgage Calculator
        </h2>
        <p className="text-base-content/70 text-sm">
          Estimate your monthly payments for different loan types.
        </p>
      </div>

      <Form className="space-y-6">
        {/* Loan Type Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1 bg-base-200 rounded-lg">
          <Button
            className={`py-2 px-3 text-sm font-medium rounded-md transition-all ${loanType === 'conventional'
              ? 'bg-white text-primary shadow-sm'
              : 'text-base-content/60 hover:text-base-content'
              }`}
            onPress={() => {
              setLoanType('conventional');
              setDownPaymentManuallyChanged(false);
            }}
          >
            Conventional
          </Button>
          <Button
            className={`py-2 px-3 text-sm font-medium rounded-md transition-all ${loanType === 'va'
              ? 'bg-white text-accent shadow-sm'
              : 'text-base-content/60 hover:text-base-content'
              }`}
            onPress={() => {
              setLoanType('va');
              setDownPaymentManuallyChanged(false);
            }}
          >
            VA Loan
          </Button>
          <Button
            className={`py-2 px-3 text-sm font-medium rounded-md transition-all ${loanType === 'fha'
              ? 'bg-white text-secondary shadow-sm'
              : 'text-base-content/60 hover:text-base-content'
              }`}
            onPress={() => {
              setLoanType('fha');
              setDownPaymentManuallyChanged(false);
            }}
          >
            FHA
          </Button>
        </div>

        {/* VA Loan Badge */}
        {loanType === 'va' && (
          <div className="alert alert-success bg-accent/10 text-accent border-accent/20 py-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Great choice! VA loans allow 0% down payment.</span>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Home Price Field */}
          <TextField name="homePrice" className="w-full">
            <Label className="label">
              <span className="label-text font-medium">Home Price</span>
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50">
                $
              </span>
              <Input
                type="number"
                className="input input-bordered rounded-lg w-full pl-8"
                value={homePrice}
                min={0}
                onChange={(e) => {
                  setHomePrice(Number(e.target.value));
                }}
              />
            </div>
          </TextField>

          {/* Down Payment Field */}
          <TextField name="downPayment" className="w-full">
            <Label className="label">
              <span className="label-text font-medium">Down Payment</span>
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50">
                $
              </span>
              <Input
                type="number"
                className="input input-bordered rounded-lg w-full pl-8"
                value={downPayment}
                min={0}
                max={homePrice}
                onChange={(e) => {
                  setDownPayment(Number(e.target.value));
                  setDownPaymentManuallyChanged(true);
                }}
              />
            </div>
            <div className="text-xs text-base-content/50 mt-1 text-right">
              {((downPayment / homePrice) * 100).toFixed(1)}%
            </div>
          </TextField>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Loan Term Field */}
          <div className="w-full">
            <Label className="label">
              <span className="label-text font-medium">Loan Term</span>
            </Label>
            <Select
              className="w-full"
              selectedKey={loanTerm}
              onSelectionChange={(selected) => setLoanTerm(Number(selected))}
            >
              <Button className="select select-bordered w-full rounded-lg flex justify-between items-center">
                <SelectValue />
                <span aria-hidden="true">▼</span>
              </Button>
              <Popover className="w-[var(--trigger-width)] bg-base-100 border border-base-300 rounded-lg shadow-lg p-1">
                <ListBox className="outline-none p-1">
                  <ListBoxItem
                    id={30}
                    className="p-2 rounded-md hover:bg-base-200 cursor-pointer outline-none"
                  >
                    30 Years
                  </ListBoxItem>
                  <ListBoxItem
                    id={20}
                    className="p-2 rounded-md hover:bg-base-200 cursor-pointer outline-none"
                  >
                    20 Years
                  </ListBoxItem>
                  <ListBoxItem
                    id={15}
                    className="p-2 rounded-md hover:bg-base-200 cursor-pointer outline-none"
                  >
                    15 Years
                  </ListBoxItem>
                  <ListBoxItem
                    id={10}
                    className="p-2 rounded-md hover:bg-base-200 cursor-pointer outline-none"
                  >
                    10 Years
                  </ListBoxItem>
                </ListBox>
              </Popover>
            </Select>
          </div>

          {/* Interest Rate Field */}
          <TextField name="interestRate" className="w-full">
            <Label className="label">
              <span className="label-text font-medium">Interest Rate</span>
            </Label>
            <div className="relative">
              <Input
                type="number"
                className="input input-bordered rounded-lg w-full pr-8"
                value={interestRate}
                min={0}
                step={0.125}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50">
                %
              </span>
            </div>
          </TextField>
        </div>
      </Form>
      {/* Results Section */}
      <div className="mt-8 pt-8 border-t border-base-200">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-sm font-medium text-base-content/60 uppercase tracking-wider mb-2">
            Estimated Monthly Payment
          </div>
          <div className="text-4xl font-extrabold text-primary mb-2">
            $
            {monthlyPayment.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
            <span className="text-lg text-base-content/40 font-normal">
              /mo
            </span>
          </div>
          <div className="text-sm text-base-content/50">
            Principal & Interest only. Taxes & Insurance not included.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
