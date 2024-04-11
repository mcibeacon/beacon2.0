const G="data:text/markdown;base64,CgoyNyw0MDAsMDAwLDAwMCBkb2xsYXJzLiBNb25leSB0aGF0IGNhbiBwdXJjaGFzZSBvdmVyIDEwIHRob3VzYW5kIFRlc2xhCk1vZGVsIFgncywgYnVpbGQgb3ZlciAxMDAwIENOIHRvd2Vycywgb3IgYnV5IGFsbW9zdCA0MDAgbWlsbGlvbiBiYW5hbmFzIQpCdXQsIG5vLiBMYXN0IEZlYnJ1YXJ5LCBhbGwgdGhhdCBtb25leSB3YXMgc3BlbnQgb24gY2hlYXAgaGVhcnQtc2hhcGVkCmNob2NvbGF0ZXMsIHNob3J0LWxpdmVkIHJlZCByb3NlcywgYW5kIGxvdmV5LWRvdmV5IHJvbWFudGljIGRpbm5lcnMuIFRoZQpibGFzcGhlbW91cyDigJxkYXkgb2YgbG92ZeKAnSBpcyBhYnNvbHV0ZWx5IHVubmVjZXNzYXJ5LCB3aXRoIHRoZSBpbm5hdGUKaWRpb2N5IG9mIHRoaXMg4oCcaG9saWRheeKAnSBjb21iaW5lZCB3aXRoIG92ZXJzcGVuZGluZyBhbmQgdGhlIG9wcHJlc3Npb24Kb2YgdGhlIHNpbmdsZXMgY29udHJpYnV0aW5nIHRvIHRoZSBhdHJvY2l0eSBrbm93biBhcyBGZWJydWFyeSAxNHRoLgo8YnI+PGJyPgpUaGluayBvZiBDaHJpc3RtYXMsIEVpZCBvciBMdW5hciBOZXcgWWVhciwgYWxsIG9mIHdoaWNoIGFyZSB3aWRlbHkKY2VsZWJyYXRlZCwgd2l0aCByaWNoIGhpc3RvcmllcyBpbnRlcnR3aW5lZCB0aWdodGx5IHdpdGggcmVsaWdpb3VzCmN1c3RvbXMsIGdpdmluZyBwZW9wbGUgcmVhbCByZWFzb25zIHRvIGluZHVsZ2UgaW4gYSBob2xpZGF5LiBUaGV5IGFyZQphdCBsZWFzdCBhIGdvb2QgdXNlIG9mIHlvdXIgbW9uZXkuIFZhbGVudGluZeKAmXMgRGF5LCBvbiB0aGUgb3RoZXIgaGFuZCwKbm90IHNvIG11Y2guIFdoZW4geW91IGFzayBwZW9wbGUgdGhlaXIgZmF2b3JpdGUgaG9saWRheSwgSSBjYW4gYWxtb3N0Cmd1YXJhbnRlZSB0aGV5IHdpbGwgbm90IHNheSBWYWxlbnRpbmXigJlzIGRheS4gSXTigJlzIGlycmVsZXZhbnQgYW5kIGEgZGF5Cm1hbnkgcGFydG5lcnMgZHJlYWQgYXMgdGhleSB0cnkgdG8gaHVudCBkb3duIHRoZSBwZXJmZWN0IGdpZnQuIE5vdCB0bwptZW50aW9uLCB0aGUgYWJzb2x1dGUgbW9zdCBhYnN1cmQgd2F5IHRvIGNlbGVicmF0ZSBsb3ZlLCB3aXRoIGdyYW5kLAptb25leS1maWxsZWQgZ2VzdHVyZXMgcmVwbGFjaW5nIHdhcm0gYWN0aW9ucyBvZiByZWFsIGxvdmUuCjxicj48YnI+CkhhdmUgeW91IGV2ZXIgd29uZGVyZWQgaG93IHdlIGFsd2F5cyBlbmQgdXAgc3BlbmRpbmcgbW9yZSB0aGFuIHdlCmludGVuZD8gQ29uc3VtZXIgYmVoYXZpb3IgaXMgcmlkaWN1bG91c2x5IGVhc3kgdG8gcHJlZGljdCBhbmQKbWFuaXB1bGF0ZSwgYW5kIFZhbGVudGluZeKAmXMgZGF5IGlzIG5vIGV4Y2VwdGlvbi4gU3RvcmVzIGJlZGF6emxlCnRoZW1zZWx2ZXMgd2l0aCByZWQgYW5kIHBpbmssIGFkb3JuZWQgd2l0aCBmYWtlLWZsb3dlcnMsIGNvbXBsZXRlIHdpdGgKdGhlIGdyYW5kZXN0IGFzc29ydG1lbnRzIG9mIGNhbmRpZXMsIGNob2NvbGF0ZXMsIHN0dWZmZWQgYW5pbWFscyBob2xkaW5nCmhlYXJ0cyBhbmQgY2hlZXN5IGNhcmRzIGFsbCBzZWVtIHdheSBvdmVyLXRoZS10b3AsIGJ1dCBjbGVhcmx5LApjb21wYW5pZXMga25vdyBob3cgdG8gcHJvZml0LiBBbmQgaXQgd29ya3MgYSBsaXR0bGUgdG9vIHdlbGwuCjxicj48YnI+CkkgZ2V0IGl0LSBpdCBmZWVscyBuaWNlIGJ1eWluZyB5b3VyIGNoZXJpc2hlZCBvbmVzIHNvbWV0aGluZyB0aGV5IHdpbGwKbG92ZS4gSeKAmW0gc3VyZSBtYW55IG9mIHlvdSBjYW4gcmVsYXRlOyB5b3XigJl2ZSBqdXN0IHN0YXJ0ZWQgZGF0aW5nCnNvbWVvbmUgeW91IHJlYWxseSBsaWtlIGFuZCB3YW50IHRvIHNob3cgeW91ciBhcHByZWNpYXRpb24gZm9yIHRoZW0uIEJ1dAphdCB3aGF0IGNvc3Q/IEZvciB0aGF0IHNhbWUgcGVyc29uIHRvIOKAnG1ha2UgYSBtaXN0YWtl4oCdIG9yIOKAnGxvc2UKZmVlbGluZ3PigJ0/IEhvdyBhYm91dCB5b3VyIGV4LWJlc3QgZnJpZW5kIHRoYXQgZGl0Y2hlZCB5b3U/IFdlcmUgYWxsCnRoZXNlIHBlb3BsZSByZWFsbHkgd29ydGggc2hlZGRpbmcgdGhlIG1vbmV5IG9uPwo8YnI+PGJyPgpGb3IgdGhvc2Ugb2YgeW91IHdobyBkb27igJl0IGhhdmUgdGhhdCBzcGVjaWFsIHNvbWVvbmUsIHNvbWVvbmUgdG8gbG92ZSwKaG93IG9mdGVuIGRvIGZpbmQgeW91cnNlbGYgc3RhcmluZyBhdCBhIGNvdXBsZSwgdGhpbmtpbmc6IOKAnE1hbiwgSSBob3BlCnRoZXkgZmluZCBvdXQgdGhleeKAmXJlIHJlbGF0ZWTigJ0sIG9yIGZpbmQgeW91cnNlbGYgbGlzdGVuaW5nIHRvIOKAnGtpc3MgbWUKdGhydSB0aGUgcGhvbmXigJ0gYnkgU291bGphIEJveSwgaG9waW5nIHNvbWVvbmUsIHNvbWV3aGVyZSwgZG9lcyBpbmRlZWQKd2FudCB0byBraXNzIHlvdSB0aHJvdWdoIHRoZSBwaG9uZT8KPGJyPjxicj4KSW4gZXNzZW5jZSwgVmFsZW50aW5l4oCZcyBEYXkgaXMgYW4gYWJvbWluYWJsZSDigJxob2xpZGF54oCdIHdpdGggbm8gcmVhbApwdXJwb3NlIGJlc2lkZXMgc3dpbmRsaW5nIHBlb3BsZSBvdXQgb2YgdGhlaXIgbW9uZXkgYW5kIG1ha2luZyBldmVyeW9uZQplbHNlIGZlZWwgbG9uZWx5LiBCZWZvcmUgeW91IGZhbGwgdmljdGltIHRvIHRoaXMsIG9yIHdhc3RlIHlvdXIgaGFyZAplYXJuZWQgbW9uZXkgb24gdGhhdCBzcGVjaWFsIHBlcnNvbiB0aGlzIFZhbGVudGluZeKAmXMgRGF5LCBJIHN1Z2dlc3QgeW91CnRha2UgYSBtb21lbnQgdG8gcmVjb25zaWRlciBhIGJldHRlciB1c2Ugb2YgeW91ciBtb25leSwgd2hpY2ggaXMgcXVpdGUKbGl0ZXJhbGx5IGFueXRoaW5nIG90aGVyIHRoYW4gYSBzdHVwaWQgcGluayBiZWFyIGhvbGRpbmcgYSBzdHVmZmVkIOKAnEkKbG92ZSB5b3XigJ0gaGVhcnQuCg==";export{G as default};