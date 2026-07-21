import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { countryCodes } from '../../data/countryCodes';

function SearchableCountrySelect({ value, onChange, error, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCodes = countryCodes.filter(c => 
    c.country.toLowerCase().includes(search.toLowerCase()) || 
    c.code.includes(search)
  );

  const selectedCountry = countryCodes.find(c => c.code === value);

  return (
    <div className={`relative ${className || ''}`} ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-full w-full flex items-center justify-between bg-transparent pl-3 pr-2 outline-none transition-all"
      >
        <span className="truncate pr-1 text-slate-700">
          {selectedCountry ? selectedCountry.code : 'Code'}
        </span>
        <ChevronDown className="h-4 w-4 text-slate-400 flex-shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute z-[9999] top-[calc(100%+4px)] left-0 w-[240px] bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
          <div className="p-2 border-b border-slate-100 sticky top-0 bg-white">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search country or code..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="w-full pl-8 pr-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#0EA5E9] focus:bg-white transition-colors"
              />
            </div>
          </div>
          <div className="max-h-[200px] overflow-y-auto overscroll-contain">
            {filteredCodes.length > 0 ? (
              filteredCodes.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    onChange({ target: { name: 'countryCode', value: c.code } });
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center justify-between ${
                    value === c.code ? 'bg-sky-50 text-[#0EA5E9] font-medium' : 'text-slate-700'
                  }`}
                >
                  <span className="truncate mr-2">{c.country}</span>
                  <span className="text-slate-400 flex-shrink-0">{c.code}</span>
                </button>
              ))
            ) : (
              <div className="px-3 py-4 text-center text-sm text-slate-500">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchableCountrySelect;
