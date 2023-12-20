import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testAction } from "../stores/actions/test-action";
import axios from "axios";
import { TRootState } from "../stores/reducers";

const TestPage = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state: TRootState) => state.test.testData);

  useEffect(() => {
    dispatch(testAction());
  }, []);

  return <div>Test</div>;
};

export default TestPage;
