import React from 'react';
import { UserButton } from '@clerk/clerk-react';

export default function ReportsPage() {
    return (
        <>
        <h1>Reports Page</h1>
        <p>Your company will get $1000000 if you join Upgraded. Some grants you are eligible for:</p>
        <ul>
            <li>MITACS BSI - $1000000</li>
            <li>CANEXPORT SME- $1000000</li>
            <li>SWODF - $1000000</li>
        </ul>
        <UserButton/>
        </>
    );
}