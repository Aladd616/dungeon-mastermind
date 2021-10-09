// ================================================
//  test component spits out a test-message stored in
// the context to verify access is possible
// ================================================
import React from 'react';
import { useDMContext } from '../utils/DMContext';

export default function TestComponent() {
  const { testmessage } = useDMContext();

  return <p>{testmessage}</p>;
}