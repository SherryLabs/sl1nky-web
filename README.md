# Example

## Basic Contract - MiniApp

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract MiniApp {
    string public s_greeting;
    uint256 public s_counter;

    function setGreeting(string memory _greeting) public {
        s_greeting = _greeting;
    }

    function setCounter(uint256 _counter) public {
        s_counter = _counter;
    }
}
```

### Functions to execute

#### Write

```typescript
function setGreeting(string memory _greeting) public {
    s_greeting = _greeting;
}
```

```typescript
function setCounter(uint256 _counter) public {
    s_counter = _counter;
}
```

#### Read

```solidity
s_greeting
```

```solidity
s_counter
```


### Contract Address

Basic contract aready deployed Avalanche Fuji

```typescript
0x2e3b71cf183657582f03c44f35fecf235677c1ed;
```
