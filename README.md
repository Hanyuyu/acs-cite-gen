# ACS Citation Generator Next

## Project Overview

ACS Citation Generator Next is a modern, web-based citation management tool designed specifically for handling American Chemical Society (ACS) style citations. Built with Next.js and TypeScript, this application offers a streamlined experience for researchers, students, and professionals working with chemical literature.

## Key Features

### 1. Citation Styles
- **Multiple Format Support**:
  - Author-date format (e.g., "Smith et al., 2024")
  - Numbered format (e.g., "[1]")
  - Customizable citation display options

### 2. Import/Export Capabilities
- **Import from Multiple Formats**:
  - BibTeX (.bib)
  - RIS (.ris)
  - EndNote (.enw)
  - Plain text

- **Export to Various Formats**:
  - Plain Text (.txt)
  - CSV (.csv)
  - BibTeX (.bib)
  - RIS (.ris)
  - EndNote (.enw)

### 3. User Interface
- Clean, modern design built with shadcn/ui
- Responsive layout that works on desktop and mobile devices
- Real-time citation preview
- Dark/light mode support

### 4. Citation Management
- Citation history tracking
- Bulk citation operations
- Easy editing and updating of existing citations
- DOI support for automatic citation generation

## Technical Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Form Handling**: React Hook Form with Zod validation

### Features Implementation
- **Citation Parsing**: Custom parsers for BibTeX, RIS, and EndNote formats
- **Citation Formatting**: Modular formatting system supporting multiple citation styles
- **Data Persistence**: Local storage for citation history
- **Validation**: Zod schema validation for citation data


## Development Philosophy

1. **User-Centric Design**
   - Focus on intuitive user experience
   - Fast and responsive interface
   - Clear error messages and validation feedback

2. **Code Quality**
   - Strong TypeScript typing
   - Modular and maintainable code structure
   - Comprehensive error handling

3. **Performance**
   - Client-side citation processing
   - Optimized rendering
   - Minimal dependencies

## Future Development

1. **Enhanced Features**
   - Additional citation styles support
   - Advanced search and filtering
   - Cloud synchronization
   - Collaborative features

2. **Technical Improvements**
   - Enhanced SEO optimization
   - Improved accessibility
   - Additional export formats
   - API integration for citation data

## Contributing

This project welcomes contributions from the community. Whether it's:
- Adding new citation styles
- Improving parsing algorithms
- Enhancing the user interface
- Fixing bugs
- Improving documentation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Last Updated: December 14, 2024
