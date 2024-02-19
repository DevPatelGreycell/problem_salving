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

	return () => {
	};
  }, [fetchData]);
   return <div>My Component</div>;
}

//Adding All My Data ds