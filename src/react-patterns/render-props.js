function ComponentWithImpossibleHooks({ name }) {
  let logic;
  if (name === "Antony") {
    logic = useAntonyLogic();
  } else {
    logic = useDefaultLogic();
  }
}

function ComponentWithRenderProps() {
  return (
    <Provider>
      {(providerProps) => (
        <OtherProvider>
          {(otherProviderProps) => {
            return (
              <Component
                providerProps={providerProps}
                otherProviderProps={otherProviderProps}
              />
            );
          }}
        </OtherProvider>
      )}
    </Provider>
  );
}

function ComponentWithHooks() {
  const providerProps = useProvider();
  const otherProviderProps = useOtherProviderProps();

  return (
    <Component
      providerProps={providerProps}
      otherProviderProps={otherProviderProps}
    />
  );
}
