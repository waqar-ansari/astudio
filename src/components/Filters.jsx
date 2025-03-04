import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const Filters = ({ setSearchQuery }) => {
  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setSearchQuery(search);
  };

  return (
    <InputGroup className="mb-3">
      <Button onClick={() => setShowInput(!showInput)}>🔍</Button>
      {showInput && (
        <Form.Control
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          onBlur={handleSearch}
        />
      )}
    </InputGroup>
  );
};

export default Filters;
