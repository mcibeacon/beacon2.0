const G="data:text/markdown;base64,CgpNaWRuaWdodHMgbWFrZXMgaXRzIG1hcmsgYXMgVGF5bG9yIFN3aWZ04oCZcyB0ZW50aCBhbGJ1bSwgYW5kIHRoZSBmaXJzdApuZXcgbXVzaWMgc2luY2Ugc2hlIGJlZ2FuIHJlcmVjb3JkaW5nIGhlciBwcmV2aW91cyB3b3JrcyBpbiAyMDIxLiBUaGlzCmlzIGh1Z2UgbmV3cyBmb3IgU3dpZnRpZXMsIHNpbmNlIHRoZXJlIGhhc27igJl0IGJlZW4gYW55dGhpbmcgbmV3IHNpbmNlCnRoZSByZWxlYXNlcyBvZiBGb2xrbG9yZSBhbmQgRXZlcm1vcmUgaW4gMjAyMC4gU3dpZnQgZGVzY3JpYmVzIHRoaXMKYWxidW0gYXMgYmVpbmcgYXV0b2Jpb2dyYXBoaWNhbCwgc2hvd2Nhc2luZyBoZXIgZGVlcGVzdCBpbnNlY3VyaXRpZXMsCmFsbCB0aGUgd2hpbGUgYnJpbmdpbmcgYmFjayB0aGUgbGl2ZWx5IGFpciBvZiBoZXIgY2hhcnQtdG9wcGluZyBsb3ZlCnNvbmdzIG9mIHRoZSAyMDEwcy4KPGJyPjxicj4KTWlkbmlnaHRzIGlzIGNvaW5lZCBhcyDigJxhIGNvbGxlY3Rpb24gb2YgbXVzaWMgd3JpdHRlbiBpbiB0aGUgbWlkZGxlIG9mCnRoZSBuaWdodCwgYSBqb3VybmV5IHRocm91Z2ggdGVycm9ycyBhbmQgc3dlZXQgZHJlYW1zLOKAnSB3aGljaCBjb25zaXN0cwpvZiB0aGlydGVlbiB0cmFja3MuIFRyYWNrIGJ5IHRyYWNrLCBhbnRpY2lwYXRpb24gYnVpbHQsIGFuZCBvbiBPY3RvYmVyCjd0aCB0aGUgdHJhY2tsaXN0IHdhcyBjb21wbGV0ZWQ6Cjxicj48YnI+CjEgTGF2ZW5kZXIgSGF6ZTxicj4KMiBNYXJvb248YnI+CjMgQW50aS1IZXJvPGJyPgo0IFNub3cgb24gdGhlIGJlYWNoIChmdC4gTGFuYSBEZWwgUmV5KTxicj4KNSBZb3XigJlyZSBvbiBZb3VyIE93biBLaWQ8YnI+CjYgTWlkbmlnaHQgUmFpbjxicj4KNyBRdWVzdGlvbuKApj88YnI+CjggVmlnaWxhbnRlIFNoXCp0PGJyPgo5IEJlamV3ZWxlZDxicj4KMTAgTGFieXJpbnRoPGJyPgoxMSBLYXJtYTxicj4KMTIgU3dlZXQgTm90aGluZzxicj4KMTMgTWFzdGVybWluZDxicj4KPGJyPjxicj4KRmFucyBhcm91bmQgdGhlIHdvcmxkIGVhZ2VybHkgYXdhaXRlZCBmb3IgbWlkbmlnaHQgb24gT2N0b2JlciAyMXN0LAp3YW50aW5nIHRvIGJlIHRoZSBmaXJzdCB0byBpbmR1bGdlIGluIFN3aWZ0J3MgY3JlYXRpdmUgdGFsZW50cy4gQWZ0ZXIKdGhhdCB2ZXJ5IGZpcnN0IGxpc3RlbiwgcGVvcGxlIHdlbnQgb25saW5lIHRvIHBvc3Qgb3BpbmlvbnMsIHNvbmcKcmFua2luZ3MsIHRoZWlyIGZhdm9yaXRlIGx5cmljcywgYW5kIHRoZW4gbGlrZWx5IHJldGlyZWQgdG8gYmVkLiBUaGUKdHJ1bHkgZGVkaWNhdGVkIFN3aWZ0aWVzIHdobyBzdGF5ZWQgdXAgdW50aWwgMyBhbSwgd2VyZSBtZXQgd2l0aCBhIHZlcnkKY2hhb3RpYyBzdXJwcmlzZSwgYXMgcHJvbWlzZWQgYnkgU3dpZnQgaGVyc2VsZi4gU2V2ZW4gbmV3IHNvbmdzIHdlcmUKcmVsZWFzZWQgdGhyZWUgaG91cnMgYWZ0ZXIgdGhlIG9yaWdpbmFsIHRoaXJ0ZWVuLgo8YnI+PGJyPgoxIFRoZSBHcmVhdCBXYXIgPGJyPgoyIEJpZ2dlciBUaGFuIFRoZSBXaG9sZSBTa3k8YnI+CjMgUGFyaXM8YnI+CjQgSGlnaCBJbmZpZGVsaXR5PGJyPgo1IEdsaXRjaDxicj4KNiBXb3VsZCd2ZSwgQ291bGQndmUsIFNob3VsZCd2ZTxicj4KNyBEZWFyIFJlYWRlcjxicj4KPGJyPjxicj4KVGhlc2Ugc29uZ3MsIGFsdGhvdWdoIG5vdCBvbiB0aGUgb3JpZ2luYWwgdHJhY2tsaXN0LCBzdGlsbCBmb2xsb3cgdGhlCnRoZW1lIG9mIHNlbGYtcmVmbGVjdGlvbiBhbmQgY29udGVtcGxhdGlvbi4gU2ltaWxhciB0byB0aGUg4oCcRnJvbSB0aGUKVmF1bHTigJ0gdHJhY2tzIGZlYXR1cmVkIGluIGhlciByZXJlY29yZGluZ3MsIHRoZXNlIHNvbmdzIGFyZSBleHRyYQpjb250ZW50IHdoaWNoIHdlcmUgbGlrZWx5IHRvbyBleHRlbnNpdmUgdG8gYWRkIG9udG8gdGhlIG9mZmljaWFsIGxpc3QuCldpdGggdGhlIG9yaWdpbmFsIHRyYWNrbGlzdCB0YWtpbmcgdXAgZm9ydHktZWlnaHQgbWludXRlcywgdGhlCmFkZGl0aW9uYWwgc29uZ3Mgd291bGQgbWFrZSB0aGUgdG90YWwgdHJhY2tsaXN0IG92ZXIgYW4gaG91ciBsb25nLgo8YnI+PGJyPgpBbHRob3VnaCBNaWRuaWdodHMgd2FzIGFuIGFtYXppbmcgYWxidW0sIHRoZXJlIGhhdmUgYmVlbiBtb3JlIHRoYW4gYQpmZXcgb25saW5lIGNyaXRpY2lzbXMuIE1hbnkgdGhvdWdodCB0aGF0IHRoaXMgYWxidW0gd291bGQgYmUgbGlrZSBoZXIKcHJldmlvdXMgdHdvLCB3aGljaCB3ZXJlIHZlcnkgbG9mdHksIHdoaW1zaWNhbCwgYW5kIHNob3dlZCB1cyBhIHNpZGUgdG8KU3dpZnTigJlzIG11c2ljIHdlIGhhZG7igJl0IHNlZW4gYmVmb3JlLiBCdXQgcGVvcGxlIHdlcmUgc3VycHJpc2VkIHRvIGhlYXIKdGhlIGJvdW5jeSBwb3Agb3BlbmluZyBvZiBMYXZlbmRlciBIYXplLiBOb3QgdG8gbWVudGlvbiB0aGUgbm90aWNlYWJsZQpsYWNrIG9mIExhbmEgRGVsIFJleSBpbiBTbm93IE9uIFRoZSBCZWFjaCwgd2hpY2ggd2FzIGEgY3JpdGljYWwgZmFjdG9yCmFzIHRvIHdoeSB0aGUgc29uZyB3YXMgaGVhdmlseSBwcm9tb3RlZC4gRmFucyBoYWQgYmVlbiBhbnRpY2lwYXRpbmcgYQpjb2xsYWJvcmF0aW9uIGJldHdlZW4gdGhlIHR3bywgYW5kIHdlcmUgc2V2ZXJlbHkgZGlzYXBwb2ludGVkIHdoZW4gYWxsCnRoYXQgd2FzIGhlYXJkIHdhcyBmYWludCB3aGlzcGVycyBiZWhpbmQgU3dpZnTigJlzIHZvY2Fscy4gQnV0IHRoZW4gYWdhaW4sCmRvbuKAmXQgbGV0IHRoZSBuZWdhdGl2ZSByZXZpZXdzIHN0b3AgeW91IGZyb20gZW5qb3lpbmcgdGhlIGFsYnVtLiBMaXN0ZW4KZm9yIHlvdXJzZWxmLCBhbmQgbGV0IHRoZSBoYXRlcnMgaGF0ZS4KPGJyPjxicj4KRGVzcGl0ZSBmYW4gc3BlY3VsYXRpb25zLCB0aGVyZSB3aWxsIHByb2JhYmx5IGJlIGEgbG9uZyBwZXJpb2Qgb2YgdGltZQpiZWZvcmUgd2UgaGVhciBhbnl0aGluZyBuZXcgZnJvbSBUYXlsb3IgYWdhaW4uIFdpdGggZm91ciByZXJlY29yZGluZ3MKc3RpbGwgb3V0c3RhbmRpbmcgYW5kIGhvcGVzIG9mIGEgdG91ciwgaXQgc2VlbXMgbGlrZSB0aGlzIGFydGlzdCBoYXMgYQpsb3Qgb24gaGVyIHBsYXRlLiBVbnRpbCB0aGVuLCBTd2lmdGllcyBzaG91bGQgYXBwcmVjaWF0ZSB0aGUgdHdlbnR5IG5ldwpzb25ncyBhbmQgYXBwcmVjaWF0ZSBTd2lmdCdzIGRlZGljYXRpb24gdG8gaGVyIGFydCwgaGVyIGZhbnMgYXMgd2VsbCBhcwpyZWZsZWN0IG9uIGhlciBpbmNyZWRpYmxlIG11c2ljYWwgY2FyZWVyLgo=";export{G as default};
