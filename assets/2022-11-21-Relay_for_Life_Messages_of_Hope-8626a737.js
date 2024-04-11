const Z="data:text/markdown;base64,CgpNQ0nigJlzIFJlbGF5IGZvciBMaWZlIHRlYW0gbWFkZSBzaWduaWZpY2FudCBwcm9ncmVzcyBvbiBUaHVyc2RheSwgT2N0b2JlcgoyMHRoIHRoaXMgeWVhciB3aXRoIHRoZSDigJxNZXNzYWdlcyBvZiBIb3Bl4oCdIGJyZWFzdCBjYW5jZXIgYXdhcmVuZXNzCnBvc3Rlci1zaWduaW5nIGluIE1hcnRpbmdyb3Zl4oCZcyBmb3llci4gT2N0b2JlciBpcyBicmVhc3QgY2FuY2VyCmF3YXJlbmVzcyBtb250aCwgYW5kIG91ciBSZWxheSBmb3IgTGlmZSBjbHViIHRvb2sgdGhlIGluaXRpYXRpdmUgdG8KY3JlYXRlIGFuIGV2ZW50IGF0IGx1bmNoIHdoZXJlIHN0dWRlbnRzIGNvdWxkIHNpZ24gYSBsYXJnZSBwb3N0ZXIgYW5kCndyaXRlIHBvc2l0aXZlIG1lc3NhZ2VzLiBUaGVyZSB3ZXJlIHR3byBwb3N0ZXJzLCB3aGljaCB3aWxsIGJlIGh1bmcgdXAKYXQgdGhlIGZyb250IGFuZCBiYWNrIGVudHJhbmNlcyBvZiB0aGUgc2Nob29sLCBmb3IgZXZlcnlvbmUgdG8gc2VlLgpEdXJpbmcgdGhpcyBldmVudCwgZ29sZCByaWJib25zIHdpdGggcGlucyB3ZXJlIGdpdmVuIG91dCB0byBlYWNoIHN0dWRlbnQKd2hvIHdyb3RlIHNvbWV0aGluZyBvbiBvbmUgb2YgdGhlc2UgcG9zdGVycyBzbyB0aGV5IGNvdWxkIHJlcHJlc2VudCB0aGUKUmVsYXkgZm9yIExpZmUgY2x1Yi4gTUNJ4oCZcyBSZWxheSBmb3IgTGlmZSB0ZWFtIGhhZCBwaW5rIG1hcmtlcnMgYW5kCmNoYWxrIGZvciBzdHVkZW50cyB0byB1c2UgdG8gc2lnbiB0aGUgcG9zdGVycywgc2luY2UgcGluayBpcyB0aGUgY29sb3VyCnRoYXQgcmVwcmVzZW50cyBicmVhc3QgY2FuY2VyIGF3YXJlbmVzcy4gQW55b25lIHdobyB3YWxrZWQgYnkgdGhlIHRhYmxlCndhcyBlbmNvdXJhZ2VkIHRvIHdyaXRlIGEgbWVzc2FnZSwgYW5kIHRoZSBwb3N0ZXJzIGxvb2tlZCBhbWF6aW5nIGJ5IHRoZQplbmQgb2YgbHVuY2guIFRoZSBzdHVkZW50cyBhbmQgc3RhZmYgbWVtYmVycyB0YWxrZWQgYWJvdXQgaG93IHRoaXMgZXZlbnQKYnJvdWdodCB0aGUgY29tbXVuaXR5IHRvZ2V0aGVyLCBhbmQgc3R1ZGVudHMgd2l0aCByZWxhdGl2ZXMgYWZmZWN0ZWQgYnkKY2FuY2VyIHNwb2tlIGFib3V0IGhvdyB0aGlzIGV2ZW50IHdhcyB1cGxpZnRpbmcgZm9yIHRoZW0uIE1ydWR1bCBBbmFnYWwsCmEgcmVsYXkgZm9yIGxpZmUgbWVtYmVyLCBzYWlkLCDigJxUaGlzIGV2ZW50IHJlYWxseSBicmluZ3MgcGVvcGxlIHRvZ2V0aGVyCmZvciBhIGNhdXNlIHRoYXQgYWZmZWN0cyBzbyBtYW55IGFyb3VuZCB0aGUgd29ybGQsIGFuZCBiZWluZyBhIHBhcnQgb2YKUmVsYXkgZm9yIExpZmUgaXMgZ3JlYXQgYmVjYXVzZSBpdCBsZXRzIHlvdSBzZWUgdGhlIHNjaG9vbCBjb21lCnRvZ2V0aGVyLuKAnSBNYXggSHV0dG9uLCBhIHN0dWRlbnQgd2hvIGF0dGVuZGVkIHRoZSBwb3N0ZXItc2lnbmluZywgc2FpZCwK4oCcSSBmaW5kIHRoaXMgZXZlbnQgcmVhbGx5IGltcG9ydGFudCBmb3IgdGhvc2UgYWZmZWN0ZWQgYnkgY2FuY2VyLiBJIGhhdmUKYSBmYW1pbHkgbWVtYmVyIHN0cnVnZ2xpbmcgd2l0aCBsZXVrZW1pYSBhbmQgSeKAmW0gc3VyZSB0aGV5IHdvdWxkIGJlCnRocmlsbGVkIHRvIHNlZSB0aGlzIGV2ZW50IGhhcHBlbmluZy7igJ0gUmVsYXkgZm9yIExpZmUgd2lsbCBhbHNvIGhhdmUgaXRzCm1haW4gZXZlbnQgaW4gTWF5LCBzbyBldmVyeW9uZSBzaG91bGQgbG9vayBmb3J3YXJkIHRvIHJhaXNpbmcgbW9uZXkgZm9yCmNhbmNlciBhd2FyZW5lc3Mgc29vbi4KClJhYmFiYiBQYW5udQo=";export{Z as default};
