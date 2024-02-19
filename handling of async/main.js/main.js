//How can you optimize the handling of async data promises in the below code?

import { useCallback, useEffect } from "react";
 function TestComponent(props) {
  const fetchData = useCallback(async () => {
	const response = await fetch(`/api/data/${props.id}`);
	const json = await response.json();
	return json;
  }, [props.id]);
 
  useEffect(() => {
    const dataPromise = fetchData();
	// Do something with the data promise
	return () => {
  	// Cancel the data promise
	};
  }, [fetchData]);
	 return <div>My Component</div>;
}

//fdsf dsfdskjfh djkfhdskjfhds