const SUPPORTED_REF_TYPES = {
  STRING: {
    isTypeFromArgument: arg => {
      return typeof arg === "string";
    },
    isTypeFromReference: (wasmExports, ref) => {
      return wasmExports.__instanceof(ref, wasmExports.__asbind_String_ID);
    },
    getRef: (wasmExports, arg) => {
      return wasmExports.__retain(wasmExports.__allocString(arg));
    },
    getValueFromRef: (wasmExports, responseRef) => {
      return wasmExports.__getString(responseRef);
    }
  },
  INT8ARRAY: {
    isTypeFromArgument: arg => {
      return arg instanceof Int8Array;
    },
    isTypeFromReference: (wasmExports, ref) => {
      return wasmExports.__instanceof(ref, wasmExports.__asbind_Int8Array_ID);
    },
    getRef: (wasmExports, arg) => {
      return wasmExports.__retain(
        wasmExports.__allocArray(wasmExports.__asbind_Int8Array_ID, arg)
      );
    },
    getValueFromRef: (wasmExports, responseRef) => {
      return Int8Array.from(wasmExports.__getArray(responseRef));
    }
  },
  UINT8ARRAY: {
    isTypeFromArgument: arg => {
      return arg instanceof Uint8Array;
    },
    isTypeFromReference: (wasmExports, ref) => {
      return wasmExports.__instanceof(ref, wasmExports.__asbind_Uint8Array_ID);
    },
    getRef: (wasmExports, arg) => {
      return wasmExports.__retain(
        wasmExports.__allocArray(wasmExports.__asbind_Uint8Array_ID, arg)
      );
    },
    getValueFromRef: (wasmExports, responseRef) => {
      return Uint8Array.from(wasmExports.__getArray(responseRef));
    }
  },
  INT16ARRAY: {
    isTypeFromArgument: arg => {
      return arg instanceof Int16Array;
    },
    isTypeFromReference: (wasmExports, ref) => {
      return wasmExports.__instanceof(ref, wasmExports.__asbind_Int16Array_ID);
    },
    getRef: (wasmExports, arg) => {
      return wasmExports.__retain(
        wasmExports.__allocArray(wasmExports.__asbind_Int16Array_ID, arg)
      );
    },
    getValueFromRef: (wasmExports, responseRef) => {
      return Int16Array.from(wasmExports.__getArray(responseRef));
    }
  },
  UINT16ARRAY: {
    isTypeFromArgument: arg => {
      return arg instanceof Uint16Array;
    },
    isTypeFromReference: (wasmExports, ref) => {
      return wasmExports.__instanceof(ref, wasmExports.__asbind_Uint16Array_ID);
    },
    getRef: (wasmExports, arg) => {
      return wasmExports.__retain(
        wasmExports.__allocArray(wasmExports.__asbind_Uint16Array_ID, arg)
      );
    },
    getValueFromRef: (wasmExports, responseRef) => {
      return Uint16Array.from(wasmExports.__getArray(responseRef));
    }
  },
  INT32ARRAY: {
    isTypeFromArgument: arg => {
      return arg instanceof Int32Array;
    },
    isTypeFromReference: (wasmExports, ref) => {
      return wasmExports.__instanceof(ref, wasmExports.__asbind_Int32Array_ID);
    },
    getRef: (wasmExports, arg) => {
      return wasmExports.__retain(
        wasmExports.__allocArray(wasmExports.__asbind_Int32Array_ID, arg)
      );
    },
    getValueFromRef: (wasmExports, responseRef) => {
      return Int32Array.from(wasmExports.__getArray(responseRef));
    }
  },
  UINT32ARRAY: {
    isTypeFromArgument: arg => {
      return arg instanceof Uint32Array;
    },
    isTypeFromReference: (wasmExports, ref) => {
      return wasmExports.__instanceof(ref, wasmExports.__asbind_Uint32Array_ID);
    },
    getRef: (wasmExports, arg) => {
      return wasmExports.__retain(
        wasmExports.__allocArray(wasmExports.__asbind_Uint32Array_ID, arg)
      );
    },
    getValueFromRef: (wasmExports, responseRef) => {
      return Uint32Array.from(wasmExports.__getArray(responseRef));
    }
  },
  FLOAT32ARRAY: {
    isTypeFromArgument: arg => {
      return arg instanceof Float32Array;
    },
    isTypeFromReference: (wasmExports, ref) => {
      return wasmExports.__instanceof(
        ref,
        wasmExports.__asbind_Float32Array_ID
      );
    },
    getRef: (wasmExports, arg) => {
      return wasmExports.__retain(
        wasmExports.__allocArray(wasmExports.__asbind_Float32Array_ID, arg)
      );
    },
    getValueFromRef: (wasmExports, responseRef) => {
      return Float32Array.from(wasmExports.__getArray(responseRef));
    }
  },
  FLOAT64ARRAY: {
    isTypeFromArgument: arg => {
      return arg instanceof Float64Array;
    },
    isTypeFromReference: (wasmExports, ref) => {
      return wasmExports.__instanceof(
        ref,
        wasmExports.__asbind_Float64Array_ID
      );
    },
    getRef: (wasmExports, arg) => {
      return wasmExports.__retain(
        wasmExports.__allocArray(wasmExports.__asbind_Float64Array_ID, arg)
      );
    },
    getValueFromRef: (wasmExports, responseRef) => {
      return Float64Array.from(wasmExports.__getArray(responseRef));
    }
  }
};

export default SUPPORTED_REF_TYPES;
