import React, { useState } from 'react';
import { Pencil, Check, X } from 'lucide-react';

export function ProfileDetails({
  name,
  playerId,
  dob,
  team,
  email,
  joinedDate,
  onUpdateField,
}) {
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const startEditing = (field, value) => {
    setEditingField(field);
    setTempValue(value);
  };

  const cancelEditing = () => {
    setEditingField(null);
    setTempValue("");
  };

  const saveEdit = (field) => {
    onUpdateField(field, tempValue);
    setEditingField(null);
    setTempValue("");
  };

  const renderEditableField = (label, field, value) => {
    const isEditing = editingField === field;

    return (
      <div className="relative group">
        <p className="text-sm text-gray-600">{label}</p>
        {isEditing ? (
          <div className="flex items-center gap-2">
            {field === 'dob' ? (
              <input
                type="date"
                value={tempValue.split('/').reverse().join('-')}
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
                  setTempValue(formattedDate);
                }}
                className="bg-gray-50 text-gray-900 rounded px-2 py-1 w-full outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="bg-gray-50 text-gray-900 rounded px-2 py-1 w-full outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
                autoFocus
              />
            )}
            <button
              onClick={() => saveEdit(field)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Check className="w-4 h-4 text-green-600" />
            </button>
            <button
              onClick={cancelEditing}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-red-600" />
            </button>
          </div>
        ) : (
          <div className="flex items-center group">
            <p className="font-medium text-gray-900 flex-1">{value}</p>
            {field !== 'email' && field !== 'joinedDate' && (
              <button
                onClick={() => startEditing(field, value)}
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-full transition-all"
              >
                <Pencil className="w-4 h-4 text-gray-600" />
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div>
        {renderEditableField('Name', 'name', name)}
        {renderEditableField('Player ID', 'playerId', playerId)}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {renderEditableField('Date of Birth', 'dob', dob)}
        {renderEditableField('Favorite Team', 'team', team)}
        <div>
          <p className="text-sm text-gray-600">Email</p>
          <p className="font-medium text-gray-900">{email.replace(/(?<=.{3}).(?=.*@)/g, '*')}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Joined</p>
          <p className="font-medium text-gray-900">{joinedDate}</p>
        </div>
      </div>
    </div>
  );
}