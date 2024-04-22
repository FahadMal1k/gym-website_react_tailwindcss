// MembershipCard.js

import React from 'react';

const MembershipCard = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Gold Membership</div>
        <p className="text-gray-700 text-base">
          Access to all gym facilities, including sauna and pool.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#fitness</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#health</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#wellness</span>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Purchase Membership
        </button>
      </div>
    </div>
  );
}

export default MembershipCard;
