import React, { useState } from 'react';
import {useAuth} from "@clerk/clerk-react";

export default function Example() {
  const [domainName, setDomainName] = useState('');

  const handleDomainNameChange = (event) => {
    setDomainName(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const companyName = domainName.split(".")[0];
    console.log("Company Name: ", companyName);
    console.log("Domain Name: ", domainName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="domain-name" className="block text-sm font-medium leading-6 text-gray-900">
                Company Domain Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="domain-name"
                  id="domain-name"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Eg: google.ca"
                  value={domainName}
                  onChange={handleDomainNameChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
