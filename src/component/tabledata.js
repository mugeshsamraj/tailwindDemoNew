import React from 'react';

function TableData() {
  return (
    <div className="p-6 overflow-x-auto">
      <table className="table-auto w-full border border-gray-200 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Role</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">Admin 1</td>
            <td className="px-4 py-2 border-b">admin@gmail.com</td>
            <td className="px-4 py-2 border-b">Super Admin</td>
            <td className="px-4 py-2 border-b">
              <button className="bg-green-200 text-green-800 px-3 py-1 rounded text-sm">Active</button>
            </td>
            <td className="px-4 py-2 border-b">
              <img src="/assets/Edit.png" alt="edit" className="w-5 h-5 cursor-pointer" />
            </td>
          </tr>

          {/* Row 2 */}
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b">Admin 2</td>
            <td className="px-4 py-2 border-b">admin2@gmail.com</td>
            <td className="px-4 py-2 border-b">Editor</td>
            <td className="px-4 py-2 border-b">
              <button className="bg-red-200 text-red-800 px-3 py-1 rounded text-sm">Inactive</button>
            </td>
            <td className="px-4 py-2 border-b">
              <img src="/assets/Edit.png" alt="edit" className="w-5 h-5 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
