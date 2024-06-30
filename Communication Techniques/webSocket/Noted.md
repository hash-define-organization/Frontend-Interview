WebSocket:

  Communication Techniques 
- Short pooling
- Long pooling: set of interval api
- web socket 
- SSE (server site event) 
- Web hooks

WebSocket:
  - it's Communication techniques
  - Full Duplex Communication
  - its works on single long live TCP connection.[set connection only single time, internal TCP, Communication happen another protocol but internally works over tcp connection] 
  - Contionus bi-directional communication.

  Process
  1. handshake [http upgrade] -> 01 switching protocol
  2. Connection Opened: [App open]
  3. bi-directional messages
  4. Connection Closed: [App Closed]

  Packages
  - wss
  - Socket.io

  Use Cases
  - Analytics
  - Financial Trading
  - Online gaming (Web-rtc)
  - Collab (Google Sheets)

 Challenges
 - Authentication 
 - Testing / Debugging
 - Backward Compatibility
 - Connection limit (100max)
 - Sticky Sessions
 - Scaling 
 - Resources Usage [Number of Connection]
