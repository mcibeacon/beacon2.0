const G="data:text/markdown;base64,77u/KipXaGF04oCZcyB0aGF0IEJ1enogYXJvdW5kIHRoZSBDb3JuZXI/KioKCk1DSSBoYXMgYSBwcm9ibGVtLiBTdHVkZW50cyBhcmUgYmVpbmcgYXR0YWNrZWQgYXQgbHVuY2h0aW1lIGJ5IGEgYmlvbG9naWNhbCBtb25zdHJvc2l0eSB0aGF0IGxlYXZlcyBubyBmb29kIHVudG91Y2hlZCBhbmQgbm8gY2hpbGQgdW5zdHVuZy4gVGhpcyBkZXNwaWNhYmxlIGNyZWF0dXJlIGhhcyBzdHVkZW50cyBydW5uaW5nIGZvciB0aGVpciBsaXZlcywgZm9sbG93aW5nIHRoZW0gYWxsIHRoZSB3YXkgZnJvbSBUaW0gSG9ydG9ucyB0byBNQ0kuIEhhdmUgeW91IGV2ZXIgYmVlbiB0aGUgdmljdGltIG9mIGEgd2FzcCBhdHRhY2s/IFdhc3BzIGhhdmUgYmVlbiBrbm93biBmcm9tIGFuY2llbnQgdGltZXMgdG8gYmUgdGhlIGJhbmUgb2Ygc3R1ZGVudHMgYWxsIG92ZXIgdGhlIHdvcmxkLiBVbmZvcnR1bmF0ZWx5LCBpdCBzZWVtcyB0aGF0IHdhc3BzIGhhdmUgdGFrZW4gYSBwYXJ0aWN1bGFyIGxpa2luZyB0byBNQ0ksIGFzIHlvdSBjYW7igJl0IGV2ZW4gc3RlcCBvdXRzaWRlIG9mIHRoZSBzY2hvb2wgd2l0aG91dCBiZWluZyBjaGFzZWQgYnkgYSB3YXNwLgoKPGJyLz4KCldhc3BzIGhhdmUgYWxzbyB0YWtlbiBvdmVyIHRoZSBUaW0gSG9ydG9ucyBuZXh0IHRvIE1DSSwgYXMgSGFzZWliIE5hc3JhdCwgYSBncmFkZSAxMSBzdHVkZW50IGF0IE1hcnRpbmdyb3ZlLCBsZWFybmVkIHRoZSBoYXJkIHdheS4gT25lIEZyaWRheSBhZnRlcm5vb24sIEhhc2VpYiB3YXMgcGVhY2VmdWxseSB3YWl0aW5nIHRvIG9yZGVyIHNvbWUgVGltbWllcywgd2hlbiBhIHdhc3Agc2l0dGluZyBvbiB0aGUgd2luZG93c2lsbCBkZWNpZGVkIEhhc2VpYiB3YXMgaXRzIGVuZW15LiBUaGUgd2FzcCBmbGV3IG92ZXIgYW5kIHN0dW5nIEhhc2VpYiB0d2ljZSwgb24gaGlzIHNob3VsZGVyIGFuZCBsZWcsIHdoaWNoIGNhdXNlZCBoaW0gbW9kZXJhdGUgcGFpbi4gTmF0dXJhbGx5LCBIYXNlaWIgZGlkIG5vdCBlbmpveSB0aGlzIGV4cGVyaWVuY2UsIGFuZCB3aGVuIGFza2VkIGZvciBoaXMgb3BpbmlvbiBvbiB3YXNwcywgaGUgc3RhdGVkLCDigJxXYXNwcyBzdWNrLOKAnSB3aGljaCBpcyBhbiBvcGluaW9uIG1hbnkgTUNJIHN0dWRlbnRzLCBpbmNsdWRpbmcgbXlzZWxmLCB3aG9sZWhlYXJ0ZWRseSBhZ3JlZSB3aXRoLgoKPGJyLz4KCkFsdGhvdWdoIHdhc3BzIGFyZSB1c3VhbGx5IHRoZSBvbmVzIHN0aW5naW5nIHN0dWRlbnRzIGF0IE1DSSwgdGhlaXIgZnJpZW5kbGllciBjb3VudGVycGFydHMsIGJlZXMsIG9mdGVuIHRha2UgdGhlIGJsYW1lLiBBcyBzaW1pbGFyIGFzIHRoZXkgc2VlbSwgd2FzcHMgc2hvdWxkIG5vdCBiZSBtaXhlZCB1cCB3aXRoIGJlZXMuIFRoZSBiaWdnZXN0IGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvIGlzIHRoZWlyIHN0aW5ncy4gSG9uZXkgYmVlcyBjYW4gb25seSBzdGluZyBvbmNlLCBhcyB0aGVpciBiYXJiZWQgc3RpbmdlciBnZXRzIHN0dWNrIGFuZCB0b3JuIG9mZiBhZnRlciB0aGV5IHN0aW5nIHNvbWV0aGluZywgd2hpY2ggaXMgdHlwaWNhbGx5IGZhdGFsIGZvciB0aGVtLCBzbyB0aGV5IG9ubHkgc3RpbmcgaW4gc2VsZi1kZWZlbmNlLiBXYXNwcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBvZnRlbiBtb3JlIGFnZ3Jlc3NpdmUgdGhhbiBiZWVzLCBhcyB0aGV5IHdpbGwgYXR0YWNrIGFueW9uZSBuZWFyIHRoZWlyIG5lc3QsIGFuZCB0aGV5IGNhbiBzdGluZyBtdWx0aXBsZSB0aW1lcywgd2hpY2ggaXMgaG93IEhhc2VpYiBrbmV3IGhlIHdhcyBzdHVuZyBieSBhIHdhc3AuIEFub3RoZXIgYmlnIGRpZmZlcmVuY2UgYmV0d2VlbiBiZWVzIGFuZCB3YXNwcyBpcyB3aGF0IHRoZXkgZWF0LiBUaGUgZGlldCBvZiBiZWVzIGNvbnNpc3RzIHNpbXBseSBvZiBwb2xsZW4gYW5kIG5lY3RhciwgYnV0IHdhc3BzIGFyZSBibG9vZHRoaXJzdHkgcHJlZGF0b3JzLCBmZWFzdGluZyBvbiBpbnNlY3RzLCBsYXJ2YWUsIGFuZCBzb21ldGltZXMgZXZlbiBNQ0kgc3R1ZGVudHMhCgo8YnIvPgoKQXMgeW91IGNhbiBzZWUsIHdhc3BzIGFuZCBiZWVzIGFyZSBwcmV0dHkgZGlmZmVyZW50LCBzbyB0aGUgbmV4dCB0aW1lIHlvdSBnZXQgY2hhc2VkIGJ5IGEgZmx5aW5nIGRlbW9uLCByZW1lbWJlciB0aGF0IGl0J3MgcHJvYmFibHkgYSB3YXNwLCBub3QgYSBiZWUuCgo8YnIvPgoKQmVlIHNhZmUgTWFydGluZ3JvdmUhCg==";export{G as default};